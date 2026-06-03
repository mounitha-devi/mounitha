create table employees(
emp_id int primary key,
emp_name varchar(100),
salary decimal(10,2),
Department varchar(50)
);
insert into employees(emp_id,emp_name,salary,Department)
values(101,'mouni',35000.00,'HR');
select * from employees;

insert into employees(emp_id,emp_name,salary,Department)
values(102,'jyothi',40000.00,'HR');
select * from employees;

insert into employees(emp_id,emp_name,salary,Department)
values(103,'raji',40000.00,'HR');
select * from employees;

update employees
set salary=45000
where emp_id=101;
select * from employees;