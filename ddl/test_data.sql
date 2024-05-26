use cpdsolution;

INSERT INTO customer (username, nickname, pass, email, userRole) VALUES ('test1-user', 'test1-nick', 'test1-pass', 'test1@hotmail.com', 'reg');
INSERT INTO customer (username, nickname, pass, email, userRole) VALUES ('test2-user', 'test2-nick', 'test2-pass', 'test2@hotmail.com', 'reg');
INSERT INTO customer (username, nickname, pass, email, userRole) VALUES ('test3-user', 'test3-nick', 'test3-pass', 'test3@hotmail.com', 'reg');
INSERT INTO customer (username, nickname, pass, email, userRole) VALUES ('test4-user', 'test4-nick', 'test4-pass', 'test4@hotmail.com', 'reg');

INSERT INTO business (bname, address) VALUES ('test1-bname', '301 test rd');
INSERT INTO business (bname, address) VALUES ('test2-bname', '302 test rd');
INSERT INTO business (bname, address) VALUES ('test3-bname', '303 test rd');
INSERT INTO business (bname, address) VALUES ('test4-bname', '304 test rd');
INSERT INTO business (bname, address) VALUES ('test5-bname', '305 test rd');
INSERT INTO business (bname, address) VALUES ('test6-bname', '306 test rd');

INSERT INTO product (bid, pname, price) VALUES ('1', 'bud light-15pk', 30.45);
INSERT INTO product (bid, pname, price) VALUES ('1', 'bud light-30pk', 50.99);
INSERT INTO product (bid, pname, price) VALUES ('1', 'sleeman-15pk', 29.99);
INSERT INTO product (bid, pname, price) VALUES ('2', 'bud light-15pk', 30.45);
INSERT INTO product (bid, pname, price) VALUES ('2', 'bud light-30pk', 30.45);
INSERT INTO product (bid, pname, price) VALUES ('2', 'sleeman-15pk', 29.99);