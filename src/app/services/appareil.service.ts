export class AppareilService {
    appareils = [
        {
            id: 1,
            name: 'Guitar Amp',
            status: 'éteint',
        },
        {
            id: 2,
            name: 'Solar Power',
            status: 'éteint',
        },
        {
            id: 3,
            name: 'Wind Power',
            status: 'allumé',
        },
    ];

    getAppareilById(id: number) {
        const appareil = this.appareils.find(
            (appareilObject) => {
                return appareilObject.id === id;
            }
        );
        return appareil;
    }

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