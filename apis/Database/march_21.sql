Create table rsm_div ( div_id int not null AUTO_INCREMENT , div_name VARchar(20) not null , cat_id int not null , PRIMARY KEY(div_id))

CREATE TABLE `masters`.`rsm_category` ( `cat_id` INT NOT NULL AUTO_INCREMENT ,`cat_name` VARCHAR(20) NOT NULL , PRIMARY KEY(`cat_id`)) ENGINE = InnoDB;


CREATE TABLE `masters`.`rsm_test` ( `test_id` INT NOT NULL , `cat_id` INT NOT NULL , `div_id` INT NOT NULL , `question` VARCHAR(200) NOT NULL , `option1`VARCHAR(100) NOT NULL , `option2` VARCHAR(100) NOT NULL , `option3`VARCHAR(100) NOT NULL , `option4` VARCHAR(100) NOT NULL , `correct_option`VARCHAR(100) NOT NULL , `entered_option` VARCHAR(100) NOT NULL , `userid`VARCHAR(50) NOT NULL , PRIMARY KEY (`test_id`, `cat_id`, `div_id`)) ENGINE =InnoDB;

