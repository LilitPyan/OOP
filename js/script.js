// Highest level class
class Person {
	#name;
	get Name() {
		return this.#name;
	}

	#birthDate;
	get BirthDate() {
		return this.#birthDate;
	}

	toString() {
		return `Person\nName: ${this.Name}\nBirthDate: ${this.BirthDate}`;
	}

	constructor(name, birthDate) {
		this.#name = name;
		this.#birthDate = birthDate;
	}
}





// Middle level class
class Employee extends Person {
	#ssn;
	get Ssn() {
		return this.#ssn;
	}

	#salary;
	get Salary() {
		return this.#salary;
	}

	toString() {
		return super.toString() + `\nEmployee\nSsn: ${this.Ssn}\nSalary: ${this.Salary}`;
	}

	constructor(name, birthDate, ssn, salary) {
		super(name, birthDate)
		this.#ssn = ssn;
		this.#salary = salary;
	}
}





class Student extends Person {
	#majorDept;
	get MajorDept() {
		return this.#majorDept;
	}

	toString() {
		return super.toString() + `\nStudent\nMajorDept: ${this.MajorDept}`;
	}

	constructor(name, birthDate, majorDept) {
		super(name, birthDate)
		this.#majorDept = majorDept;
	}
}

// Lower level class
// Employee childs
class Staff extends Employee {
	#position;
	get Position() {
		return this.#position;
	}

	#student;
	get Student() {
		return this.#student;
	}
	set Student(obj) {
		if (typeof obj === "object" && this.Name === obj.Name && this.BirthDate === obj.BirthDate) {
			this.#student = obj
		}
	}

	toString() {
		return super.toString() + `\nStaff\nPosition: ${this.Position}\nStudent: ${this.Student}`;
	}

	constructor(name, birthDate, ssn, salary, position) {
		super(name, birthDate, ssn, salary)
		this.#position = position;
	}
	isStudent() {
		return this.Student !== null ? true : false;
	}
	staff() {
		return	`I'm ${this.Name} and I'm staff and my position is ${this.Position}.`
					+ this.isStudent() ? `\nI'm student too and my major dept is ${this.Student.MajorDept}` : '';
	}
}
class Faculty extends Employee {
	#rank;
	get Rank() {
		return this.#rank;
	}

	toString() {
		return super.toString() + `\nFaculty\nRank: ${this.Rank}`;
	}

	constructor(name, birthDate, ssn, salary, rank) {
		super(name, birthDate, ssn, salary)
		this.#rank = rank;
	}
	faculty() {
		return	`I'm ${this.Name} and I'm faculty and my rank is ${this.Rank}.`;
	}
}
class Assistant extends Employee {
	#type;
	get Type() {
		return this.#type;
	}

	toString() {
		return super.toString() + `\nAssistant\nAssistant: ${this.Assistant}`;
	}

	constructor(name, birthDate, ssn, salary, type) {
		super(name, birthDate, ssn, salary)
		this.#type = type;
	}
	assistant() {
		return	`I'm ${this.Name} and I'm assistant and my type is ${this.Type}.`;
	}
}
// Student childs
class Graduate extends Student {
	#degreeProgram;
	get DegreeProgram() {
		return this.#degreeProgram;
	}
	#staff
	get Staff() {
		return this.#staff
	}
	set Staff(obj) {
		if (typeof obj === "object" && this.Name === obj.Name && this.BirthDate === obj.BirthDate) {
			this.#staff = obj
		}
	}

	toString() {
		return super.toString() + `\nGraduate\nDegreeProgram: ${this.DegreeProgram}\nStaff: ${this.Staff}`;
	}

	constructor(name, birthDate, majorDept, degreeProgram) {
		super(name, birthDate, majorDept)
		this.#degreeProgram = degreeProgram;
	}

	graduate() {
		return	`I'm ${this.Name} and I'm graduate student and my degree program is ${this.DegreeProgram}.`;
	}

	isStaff() {
		return this.#staff === null ? false : true;
	}
}
class UnderGraduate extends Student {
	#_class;
	get Class() {
		return this.#_class;
	}

	#courses;
	get Courses() {
		return this.#courses;
	}

	toString() {
		return super.toString() + `\nUnderGraduate\nClass: ${this.Class}\nCourses: ${this.Courses}`;
	}

	constructor(name, birthDate, majorDept, _class, courses) {
		super(name, birthDate, majorDept)
		this.#_class = _class;
		this.#courses = courses;
	}

	underGraduaate() {
		return	`I'm ${this.Name} and I'm under graduate student and my class is ${this.Class} and course(s) is ${this.Courses}.`;
	}
}

// Creating instans of classes
const person = new Person("John", "04.02.1998")

const employee = new Employee("Bob", "01.10.1990", "ID: 0107", "300$")
const student = new Student("Stiven", "03.06.1992", "Enginer")

const staff = new Staff("Ben", "27.04.1989", "ID: 0336", "350$", "team leader")
const faculty = new Faculty("Simon", "04.02.1998", "ID: 1109", "1200$", "Chief of Employee Faculty")
const assistant = new Assistant("Brittney", "23.08.1995", "ID: 1110", "1000$", "Secretary")

const graduate = new Graduate("Taylor", "30.01.1998", "Designer", "Home interior design")
const underGraduate = new UnderGraduate("Travis", "04.02.1998", "II", "Developer")

const heigestClassObject = document.getElementById("Highest")
heigestClassObject.innerText = person.toString()

const middle_1_ClassObject = document.getElementById("Middle1")
middle_1_ClassObject.innerText = employee.toString()

const middle_2_ClassObject = document.getElementById("Middle2")
middle_2_ClassObject.innerText = student.toString()

const lower_1_ClassObject = document.getElementById("Lower1")
lower_1_ClassObject.innerText = staff.toString()

const lower_2_ClassObject = document.getElementById("Lower2")
lower_2_ClassObject.innerText = faculty.toString()

const lower_3_ClassObject = document.getElementById("Lower3")
lower_3_ClassObject.innerText = assistant.toString();

const lower_4_ClassObject = document.getElementById("Lower4")
lower_4_ClassObject.innerText = graduate.toString()

const lower_5_ClassObject = document.getElementById("Lower5")
lower_5_ClassObject.innerText = underGraduate.toString()
