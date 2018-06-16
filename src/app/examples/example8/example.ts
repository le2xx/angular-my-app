import { Component } from '@angular/core';

const json = [
    { name: 'BMV', model: 'X5', price: 34000, year: 2015 },
    { name: 'AUDI', model: 'A3', price: 12000, year: 2017 },
    { name: 'Hyundai', model: 'Solaris', price: 20000, year: 2013 },
    { name: 'KIA', model: 'Rio', price: 14600, year: 2015 },
    { name: 'AUDI', model: 'Q3', price: 17500, year: 2014 },
    { name: 'BMV', model: 'X6', price: 39000, year: 2018 },
    { name: 'KIA', model: 'Cerato', price: 11000, year: 2009 },
    { name: 'Toyota', model: 'Carola', price: 2100, year: 2007 },
    { name: 'AUDI', model: 'A6', price: 12500, year: 2011 },
    { name: 'Hyundai', model: 'Gets', price: 6000, year: 2013 },
    { name: 'ВАЗ', model: '1111', price: 1000, year: 1998 }
  ];

@Component({
    selector: 'app-ex-8',
    templateUrl: './example.html',
    styleUrls: ['./example.css']
})
export class Example8Component {
    todos = json.slice();
    selected = '';
    auto = {};

    get sum() {
        return this.todos.length;
    }

    get select() {
        const listName: string[] = this.todos.reduce((acc, item) => [...acc, item.name], []);
        return Array.from(new Set(listName));
    }

    sortAuto(n, m = 'up') {
        if (m === 'up') {
            return this.todos.sort((a, b) => a[n] < b[n] ? -1 : 1);
        }
        return this.todos.sort((a, b) => b[n] < a[n] ? -1 : 1);
    }

    filterAuto() {
        this.todos = this.todos.filter(item => item.year > 2011);
    }

    filterAutoName(selectAuto) {
        this.todos = this.todos.filter(item => item.name === selectAuto);
    }

    reset() {
        this.todos = json.slice();
    }

    addAuto(auto) {
        if (Object.values(auto).length < 4) {
            return;
        }
        this.todos.push(auto);
        this.auto = {};
    }

    removAuto(auto) {
        this.todos = this.todos.filter(item =>
        Object.values(item).join() !== Object.values(auto).join());
    }
}
