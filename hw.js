class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
        }
        
        getSalary() {
        let salary = this.rate * this.days;
        return salary;
        }
    }
    
    
    let worker = new Worker('Ivan', 'Ivanov', 10, 31);
    
    console.log(worker.name);
    console.log(worker.surname);
    console.log(worker.rate);
    console.log(worker.days);
    console.log(worker.getSalary());

    let worker2 = new Worker('Diane', 'Smith', 15, 14);

    console.log(worker2.name);
    console.log(worker2.surname);
    console.log(worker2.rate);
    console.log(worker2.days);
    console.log(worker2.getSalary());

    let worker3 = new Worker('Josh', 'Grint', 34, 20);

    console.log(worker3.name);
    console.log(worker3.surname);
    console.log(worker3.rate);
    console.log(worker3.days);
    console.log(worker3.getSalary());