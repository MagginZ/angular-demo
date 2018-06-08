import { Component, Input} from '@angular/core';
@Component({
    selector: 'app-name-child',
    template: `<h3>{{name}}</h3>`
})
export class NameChildComponent{
    private _name = ''; // setter设定器
    @Input()
    // 对传入的数据过滤空格
    set name(name: string) {
        this. _name = (name && name.trim()) || '<no name set>'
    }
    get name(): string{return this._name}

}