// * react
import InputMask from 'react-input-mask';
import DatePicker from 'react-datepicker';

// * store
import { observer } from 'mobx-react-lite';
import filter from '../../../../../store/filter';

// * styles
import styles from './Filters.module.scss';
import 'react-datepicker/dist/react-datepicker.css';

// * components
import SingleSelect from '../../../../ui/Select';
import Title from '../../../../ui/Title';
import InputWrapper from '../../../../ui/InputWrapper';

const optionsSort = [
    { value: 'Создан', label: 'Создан' },
    { value: 'Название', label: 'Название' },
];
const optionsOrder = [
    { value: 'По убыванию', label: 'По убыванию' },
    { value: 'По возрастанию', label: 'По возрастанию' },
];

const Filters = observer(() => {
    const selectDate = (date: Date, name: string): void => {
        name === 'start' && filter.setDateStart(date);
        name === 'end' && filter.setDateEnd(date);
    };

    return (
        <form className={styles.filters}>
            <InputWrapper title="ID документа">
                <InputMask mask="********-*********-****-***********" />
            </InputWrapper>
            <div>
                <Title variant="h4">Создан</Title>
                <div className={styles.created}>
                    <InputWrapper>
                        <DatePicker
                            selected={filter.dateStart}
                            onChange={(date: Date) => selectDate(date, 'start')}
                            startDate={filter.dateStart}
                            endDate={filter.dateEnd}
                            maxDate={filter.dateEnd}
                            dateFormat="dd-MM-yyyy"
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <DatePicker
                            id="end"
                            selected={filter.dateEnd}
                            onChange={(date: Date) => selectDate(date, 'end')}
                            startDate={filter.dateStart}
                            endDate={filter.dateEnd}
                            minDate={filter.dateStart}
                            dateFormat="dd-MM-yyyy"
                        />
                    </InputWrapper>
                </div>
            </div>
            <InputWrapper title="Название документа">
                <input type="text" id="input" name="name" />
            </InputWrapper>
            <div>
                <Title variant="h4">Сортировка</Title>
                <div className={styles.sort}>
                    <SingleSelect
                        placeholder="Сортировка"
                        isClearable
                        options={optionsSort}
                    />
                    <SingleSelect
                        placeholder="Сортировка"
                        isClearable={false}
                        options={optionsOrder}
                    />
                </div>
            </div>
        </form>
    );
});

export default Filters;
