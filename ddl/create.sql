USE cpdsolution;

CREATE TABLE customer(
	userid INT AUTO_INCREMENT NOT NULL,
	username VARCHAR(50),
    nickname VARCHAR(50),
    pass VARCHAR(50),
    email VARCHAR(50),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    userRole VARCHAR(20) DEFAULT 'user',
    PRIMARY KEY (userid)
);

CREATE TABLE business(
	bid INT AUTO_INCREMENT NOT NULL,
    bname VARCHAR(50),
    quantityrating INT DEFAULT -1,
    qualityrating INT DEFAULT -1,
    pricerating INT DEFAULT -1,
    address varchar(50),
    PRIMARY KEY (bid)
);

CREATE TABLE product(
	pid INT AUTO_INCREMENT NOT NULL,
    bid INT NOT NULL,
    pname VARCHAR(50) NOT NULL,
    quantityrating INT DEFAULT -1,
    qualityrating INT DEFAULT -1,
    pricerating INT DEFAULT -1,
    previewcount INT DEFAULT 0,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (pid),
    FOREIGN KEY (bid) REFERENCES business (bid)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE breview(
	brid INT AUTO_INCREMENT NOT NULL,
    bid INT NOT NULL,
    content varchar(2500),
    PRIMARY KEY (brid),
    FOREIGN KEY (bid) REFERENCES business (bid)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

CREATE TABLE preview(
	prid INT AUTO_INCREMENT NOT NULL,
    pid INT NOT NULL,
    content varchar(2500),
    PRIMARY KEY (prid),
    FOREIGN KEY (pid) REFERENCES product (pid)
		ON DELETE CASCADE
		ON UPDATE CASCADE
);

