SHOW databases;

CREATE DATABASE STUDENT;
use Student;
CREATE TABLE Student_Data(
		Id Int PRIMARY KEY, 
        Student_Name Varchar(255),
        marks INT NOT NULL,
        Grade Varchar(1),
        City Varchar(20)
);

Insert Into Student_Data(Id,Student_Name,marks,Grade,City) 
		Values(101,"Mihir",78,"C","Pune"),
			(102,"Lokit",87,"B","Mumbai"),
            (103,"JainShahab",89,"B","Delhi"),
            (104,"Kanhu",94,"A","Mumbai"),
            (105,"Master",64,"D","Pune");
            
Select * From Student_Data;            

-- DROP COMMAND 
DROP TABLE Student_Data;
DROP DATABASE STUDENT;

-- EXISTS 
DROP DATABASE IF EXISTS STUDENT;
CREATE DATABASE IF NOT EXISTS STUDENT;

-- SHOW
SHOW TABLES;
SHOW DATABASES;

-- SELECT 
SELECT * FROM Student_Data;
SELECT Student_Name,Marks FROM Student_Data;

--  WHERE
SELECT * FROM Student_Data WHERE grade='A';
SELECT * FROM STUDENT_DATA WHERE grade Not IN ('A','B');
SELECT * FROM STUDENT_DATA WHERE grade IN ('A','B');
SELECT * FROM STUDENT_DATA WHERE grade='A' OR grade='B';
SELECT * FROM STUDENT_DATA WHERE grade='A' AND grade='B';
SELECT * FROM STUDENT_DATA WHERE marks BETWEEN 35 AND 85;


-- LIMIT 
SELECT * FROM STUDENT_DATA LIMIT 2;

-- ORDER BY 
SELECT * FROM STUDENT_DATA
ORDER BY STudent_name ASC;

SELECT * FROM STUDENT_DATA
WHERE grade='A' 
ORDER BY STudent_name ASC;

SELECT * FROM STUDENT_DATA
WHERE grade='A' 
ORDER BY STudent_name ASC
LIMIT 2;

-- GROUP BY HAVING

SELECT CITY , COUNT(STUDENT_NAME)
FROM STUDENT_DATA
GROUP BY CITY;

SELECT CITY , COUNT(STUDENT_NAME)
FROM STUDENT_DATA
GROUP BY CITY
HAVING CITY="Pune";


SELECT CITY ,marks, avg(marks)
FROM STUDENT_DATA
WHERE marks > 85
GROUP BY CITY,marks;

SELECT CITY ,marks, avg(marks)
FROM STUDENT_DATA
WHERE marks > 85
GROUP BY CITY,marks
HAVING CITY="MUMBAI";


-- UPDATE 
SET SQL_SAFE_UPDATES=0;

UPDATE STUDENT_DATA
SET grade='B'
WHERE grade='A';

DELETE FROM STUDENT_DATA
WHERE marks>40;


-- FOREGIN KEY 

CREATE TABLE STU_INFO(
	Id Int primary KEY,
    CourseId Int,
    Course varchar(255) DEFAULT "C++",
    age INT CHECK (age>=18),
    foreign key (Id) references Student_Data(Id)
    -- CONSTRAINT age_Check CHECK (age>16)
    ON DELETE CASCADE 
    ON UPDATE CASCADE
);

INSERT INTO STU_INFO(Id,CourseId,Course,age) 
	values(101,1,"C++",18),
		(102,2,"Java",19),
        (103,3,"Python",19),
        (104,4,"C",20),
        (105,1,"C++",21);

        
SELECT * FROM STUDENT_DATA;
SELECT * FROM STU_INFO;
        
DROP TABLE STU_INFO;


-- ALTER TABLE
ALTER TABLE STUDENT_DATA
ADD COLUMN TEACHER VARCHAR(255);

SELECT * FROM STUDENT_DATA;

ALTER TABLE STUDENT_DATA
DROP COLUMN TEACHER;

ALTER TABLE STU_DATA
RENAME TO STUDENT_DATA;

SELECT * FROM STUDENT_DATA;

ALTER TABLE STUDENT_DATA
CHANGE COLUMN Student_Name Name Varchar(255); 

ALTER TABLE STUDENT_DATA
MODIFY grade Char;

-- JOINS


-- INNER JOIN
    
SELECT *
FROM STUDENT_DATA
INNER JOIN STU_INFO
ON STUDENT_DATA.Id = STU_INFO.Id;

-- LEFT JOIN
SELECT * 
FROM STUDENT_DATA
LEFT JOIN STU_INFO
ON STUDENT_DATA.Id = STU_INFO.Id;

-- RIGHT JOIN 
SELECT *
FROM STUDENT_DATA
RIGHT JOIN STU_INFO
ON STUDENT_DATA.Id = STU_INFO.Id;

-- FULL JOINS
SELECT *
FROM STUDENT_DATA
LEFT JOIN STU_INFO
ON STUDENT_DATA.Id = STU_INFO.Id
UNION
SELECT *
FROM STUDENT_DATA
RIGHT JOIN STU_INFO
ON STUDENT_DATA.Id = STU_INFO.Id;



-- LEFT EXCLUSIVE JOIN

SELECT *
FROM STUDENT_DATA
LEFT JOIN STU_INFO
ON STUDENT_DATA.Id = STU_INFO.Id
WHERE STUDENT_DATA.ID IS NULL;

-- SELF JOIN
SELECT *
FROM STUDENT_DATA as A
JOIN STUDENT_DATA as B
ON A.Id = B.Id;


-- VIEW 
CREATE VIEW view1 AS 
SELECT * FROM STUDENT_DATA;

SELECT * FROM view1;



-- TCL
SET autocommit=0;

CREATE TABLE STU(Id Int,Name varchar(255));
INSERT INTO STU VALUES(1,"mihir");
COMMIT;

DROP TABLE STU;

INSERT INTO STU VALUES(2,"JAIN");
SELECT * FROM STU;
ROLLBACK;

INSERT INTO STU VALUES(3,"lokit");
SAVEPOINT A;
UPDATE STU SET Id=4 WHERE Id=3;
SAVEPOINT B;
SELECT * FROM STU;
ROLLBACK TO A;









    
	



/*
/* COMMIT */
/*
BEGIN TRANSACTION 
	INSERT INTO EmployeeDetails VALUES
	(12,'Sanju Samson', '1996-09-12',0,'sanju@abc.com');
	
	SELECT * FROM EmployeeDetails;

COMMIT;
SELECT * FROM EmployeeDetails;

/*
/* ROLLBACK */
/*
BEGIN TRANSACTION 
	INSERT INTO EmployeeDetails VALUES
	(13,'Varun Dhawan', '1993-03-12',0,'dVarun@abc.com');
	SELECT * FROM EmployeeDetails;

ROLLBACK;

SELECT * FROM EmployeeDetails;

/* SAVEPOINT */
/*
BEGIN TRANSACTION 
	INSERT INTO EmployeeDetails VALUES
	(13,'Varun Dhawan', '1993-03-12',0,'dVarun@abc.com');
	SELECT * FROM EmployeeDetails;

	SAVE TRANSACTION checkPoint1;
	INSERT INTO EmployeeDetails VALUES
	(14,'Yashaswi Jaiswal', '1999-02-11',0,'yashaswiJ@abc.com');

ROLLBACK TRANSACTION checkPoint1;
SELECT * FROM EmployeeDetails;

*/
------------------------------------------------------------------
/*DCL COMMANDS */

/*1.GRANT
 Syntax for grant

GRANT privilege_name
ON object_name
TO {user_name |PUBLIC |role_name}
[WITH GRANT OPTION]; 

GRANT SELECT
ON EmployeeDetails
TO lalit

-----------------------------------------------------------------------

/*2.REVOKE

-- Syntax for revoke

REVOKE privilege_name
ON object_name
FROM [user_name]

REVOKE SELECT
ON EmployeeDetails
FROM [lalit]

*/
----------------------------------------------------------------------------------------




 


