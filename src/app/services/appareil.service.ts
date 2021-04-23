import { Subject } from "rxjs-compat";

export class AppareilService {

    appareilSubject = new Subject<any[]>();

    private appareils = [
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

    emitAppareilSubject() {
        this.appareilSubject.next(this.appareils.slice());
    }

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
        this.emitAppareilSubject();
    }

    switchOffAll() {
        for (let appareil of this.appareils) {
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }

    switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    }
}