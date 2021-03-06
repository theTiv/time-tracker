import React from 'react';

import {IonHeader, IonTitle, IonToolbar, isPlatform} from '@ionic/react';

import {WithTranslation, withTranslation} from 'react-i18next';

import styles from './Header.module.scss';

interface HeaderProps extends WithTranslation {
}


class Header extends React.Component<HeaderProps> {

    render() {
        if (isPlatform('mobile')) {
            return <></>;
        }

        const {t} = this.props;

        return <IonHeader>
            <IonToolbar>
                <IonTitle>
                    <div className={styles.title}>
                        <div>
                            <img src="/assets/icon/VibeLogo.png" alt={t('header.logo')}/>
                        </div>
                        <span>Time Tracker</span>
                    </div>
                </IonTitle>
            </IonToolbar>
        </IonHeader>;
    }
}

export default withTranslation(['header'])(Header);
