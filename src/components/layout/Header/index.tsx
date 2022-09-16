// * styles/mui
import styles from './Header.module.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// * components
import Title from '@components/ui/Title';

const Header = () => {
    return (
        <header className={styles.header}>
            <Title variant="h3">Поиск документов</Title>
            <MoreVertIcon />
        </header>
    );
};

export default Header;
