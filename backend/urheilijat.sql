CREATE TABLE urheilijat (
id int(11) NOT NULL AUTO_INCREMENT,
etunimi VARCHAR(50),
sukunimi VARCHAR(50),
kutsumanimi VARCHAR(50),
svuosi VARCHAR(4),
paino int(11),
laji VARCHAR(50),
saavutukset VARCHAR(100),
PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

INSERT INTO urheilijat (id, etunimi, sukunimi, kutsumanimi, svuosi, paino, laji, saavutukset) VALUES
(1, 'Aku', 'Ankka', 'Aku', '1998', 72, 'Koripallo', 'SM-kulta'),
(2, 'Hessu', 'Hopo', 'Hopo', '1995', 63, 'Jalkapallo', 'SM-Hopea'),
(3, 'Roope', 'Setä', 'Roope', '1997', 81, 'Tennis', 'SM-Pronssi');

