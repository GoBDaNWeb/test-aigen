// * react
import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import DatePicker from 'react-datepicker';

// * store
import { observer } from 'mobx-react-lite';
import filter from '@store/filter';

// * helpers
import getDates from 'helpers/getDates';

// * styles
import styles from './Filters.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

// * components
import SingleSelect from '@components/ui/Select';
import Title from '@components/ui/Title';
import InputWrapper from '@components/ui/InputWrapper';

const optionsSort = [
    { value: 'createdAt', label: 'Создан' },
    { value: 'name', label: 'Название' },
];
const optionsOrder = [
    { value: 'asc', label: 'По возрастанию' },
    { value: 'desc', label: 'По убыванию' },
];

const Filters = observer(() => {
    const { register, control, watch } = useForm();

    const watchStart = watch('start');
    const watchEnd = watch('end');

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            const uuidReplace = value.id?.replace(/[^a-zA-Z0-9\s!-?]+/g, '');
            name === 'id' && filter.setUUID(uuidReplace);
            name === 'name' && filter.setName(value.name);
            name === 'start' && filter.setDateStart(value.start);
            name === 'end' && filter.setDateEnd(value.end);
            name === 'sort' &&
                filter.setSort(value.sort === null ? null : value.sort.value);
            name === 'order' && filter.setOrder(value.order.value);
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    useEffect(() => {
        const dates = getDates(watchStart, watchEnd);
        filter.setDates(dates);
    }, [watchStart, watchEnd]);

    return (
        <form className={styles.filters}>
            <InputWrapper
                title="ID документа"
                additional="Если заполнено поле ID документа, все остальные поля будут проигнорированы"
            >
                <Controller
                    name="id"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <InputMask
                            mask="********-****-****-****-************"
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
            </InputWrapper>
            <div>
                <Title variant="h4">Создан</Title>
                <div className={styles.created}>
                    <InputWrapper>
                        <Controller
                            name="start"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    selected={value}
                                    onChange={onChange}
                                    startDate={filter.dateStart}
                                    endDate={filter.dateEnd}
                                    maxDate={filter.dateEnd}
                                    dateFormat="dd-MM-yyyy"
                                    isClearable
                                />
                            )}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Controller
                            name="end"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <DatePicker
                                    selected={value}
                                    onChange={onChange}
                                    startDate={filter.dateStart}
                                    endDate={filter.dateEnd}
                                    minDate={filter.dateStart}
                                    dateFormat="dd-MM-yyyy"
                                    isClearable
                                />
                            )}
                        />
                    </InputWrapper>
                </div>
            </div>
            <InputWrapper title="Название документа">
                <input
                    {...register('name')}
                    type="text"
                    id="input"
                    name="name"
                />
            </InputWrapper>
            <div>
                <Title variant="h4">Сортировка</Title>
                <div className={styles.sort}>
                    <Controller
                        name="sort"
                        control={control}
                        render={({ field: { onChange } }) => (
                            <SingleSelect
                                placeholder="Сортировка"
                                isClearable
                                onChange={onChange}
                                options={optionsSort}
                            />
                        )}
                    />
                    <Controller
                        name="order"
                        control={control}
                        render={({ field: { onChange } }) => (
                            <SingleSelect
                                placeholder="Сортировка"
                                isClearable={false}
                                onChange={onChange}
                                options={optionsOrder}
                            />
                        )}
                    />
                </div>
            </div>
        </form>
    );
});

export default Filters;
