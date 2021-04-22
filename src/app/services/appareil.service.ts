export class AppareilService {
    appareils = [
        {
            name: 'Guitar Amp',
            status: 'éteint',
        },
        {
            name: 'Alim Console',
            status: 'éteint',
        },
        {
            name: 'Bar Light',
            status: 'allumé',
        },
    ];

    switchOnAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'allumé';
        }
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
    }
}