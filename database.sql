CREATE TABLE AccessLevel (
	id serial4 NOT NULL PRIMARY KEY (id),
    levelName varchar
);

INSERT INTO AccessLevel (levelName) VALUES ('Основной');

CREATE TABLE Users (
	id serial4 NOT NULL PRIMARY KEY (id),
	fio varchar(255),
	userLogin varchar(255),
	userPassword varchar,
 	birthdate date,
	sex boolean,
	email varchar(255),
    fkAccessLevel serial4,
    FOREIGN KEY (fkAccessLevel) REFERENCES AccessLevel (Id)
);

CREATE TABLE Folders (
	id serial4 NOT NULL PRIMARY KEY (id),
    folderName varchar,
    fkFolder serial4,
    fkAccessLevel serial4,
    FOREIGN KEY (fkAccessLevel) REFERENCES AccessLevel (Id)
);

INSERT INTO Folders (folderName, fkAccessLevel) VALUES ('Корневая', 1);

CREATE TABLE Faqs (
	id serial4 NOT NULL PRIMARY KEY (id),
    faqName varchar,
    faqHtml serial4,
    fkFolder serial4,
    FOREIGN KEY (fkFolder) REFERENCES Folders (Id)
);

CREATE TABLE SurveyReasons (
	id serial4 NOT NULL PRIMARY KEY (id),
    survayName varchar,
    isBad bool,
    isForStaff bool
);