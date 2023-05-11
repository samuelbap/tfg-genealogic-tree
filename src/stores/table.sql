

CREATE TABLE documentLocation (
  id SERIAL PRIMARY KEY,
  country VARCHAR(255) NOT NULL,
  locState VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  municipality VARCHAR(255) NOT NULL,
  parish VARCHAR(255) NOT NULL,
  institution VARCHAR(255) NOT NULL,
  idBook VARCHAR(255) NOT NULL
);

CREATE TABLE person (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  personName VARCHAR(255) ,
  lastName VARCHAR(255)
);

CREATE TABLE document (
  id SERIAL PRIMARY KEY,
  documentType VARCHAR(255) NOT NULL,
  eventLocation VARCHAR(255) NOT NULL,
  issueDate DATE NOT NULL,
  imageNumber int NOT null,
	imageUrl varchar(300) NOT NULL,
	locationId int NOT NULL,
	rootPersonId int NOT NULL,
  CONSTRAINT locationIdFk FOREIGN KEY (locationId) REFERENCES documentLocation(id), 
  CONSTRAINT rootPersonIdFk FOREIGN KEY (rootPersonId) REFERENCES person(id)

);


CREATE TABLE documentProtagonist (
  id SERIAL PRIMARY KEY,
	idPerson INT NOT NULL,
  idDocument INT NOT NULL,
  CONSTRAINT idPersonFk1 FOREIGN KEY (idPerson) REFERENCES person(id),
  CONSTRAINT idDocumentFk2 FOREIGN KEY (idDocument) REFERENCES gDocument(id)
);



CREATE TABLE documentParnership (
  id SERIAL PRIMARY KEY,
  idDocument INT NOT NULL,
  partner INT  NOT NULL,
  partner1 INT,
  CONSTRAINT idDocumentDk1 FOREIGN KEY (idDocument) REFERENCES gDocument(id),
  CONSTRAINT partnerFk2 FOREIGN KEY (partner) REFERENCES person(id),
  CONSTRAINT partnerFk3 FOREIGN KEY (partner1) REFERENCES person(id)
);



CREATE TABLE documentChildred (
  idChildren INT NOT NULL,
  idDocument INT NOT NULL,
  idPartnership INT NOT NULL,
  CONSTRAINT idChildrenFk FOREIGN KEY (idChildren) REFERENCES person(id),
  CONSTRAINT documentIdFk2 FOREIGN KEY (idDocument) REFERENCES gDocument(id),
  CONSTRAINT idPartnershipFk3 FOREIGN KEY (idPartnership) REFERENCES documentParnership(id),
    PRIMARY KEY (idChildren, idDocument, idPartnership) 

);
