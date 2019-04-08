import { EventEmitter ,Injectable} from '@angular/core';
import { Data } from './data';

@Injectable({
    providedIn: 'root',
    })


export class DataService{

    datas :  Data[] = [

        new Data(
        'Perfect Body System',
        'Jasmine Taylor',
        'Cards are built with as little markup and styles as possible',
        'Health Forge',
        'Multisport',
        '10/14',
        'https://sandbox-uploads.imgix.net/u/1554758969-df21ab0b27c3448b2c45582b805c8df2?w=600'
    ),
    new Data(
        'Body & Soul',
        'Jasmine Taylor',
        'Cards are built with as little markup and styles as possible',
        'Health Forge',
        'Multisport',
        '10/14',
        'https://sandbox-uploads.imgix.net/u/1554759087-d07cd9230e68cd381bf696e40c08a987?w=600'
    ),
    new Data(
        'Power Pump',
        'Jasmine Taylor',
        'Cards are built with as little markup and styles as possible',
        'Health Forge',
        'Multisport',
        '10/14',
        'https://sandbox-uploads.imgix.net/u/1554759218-cb2d52790f68d4dec7f768cd2ed56d18?w=600'
    ),
    new Data(
        'Rapid Fat Burning',
        'Jasmine Taylor',
        'Cards are built with as little markup and styles as possible',
        'Health Forge',
        'Multisport',
        '10/14',
        'https://sandbox-uploads.imgix.net/u/1554759310-63a1973624e43771e720c800474f0973?w=600'
    ),
    ];

    GetDetails(){
        return this.datas.slice();
    }
}