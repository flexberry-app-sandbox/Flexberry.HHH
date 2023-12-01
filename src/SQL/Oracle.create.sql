



CREATE TABLE "ПердстЭксп"
(

	"primaryKey" RAW(16) NOT NULL,

	"ОсновПровед" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"ВидЭксп" NVARCHAR2(255) NULL,

	"РезулЭксп" NVARCHAR2(11) NULL,

	"ЦельЭксп" NVARCHAR2(255) NULL,

	"ОбъектЭксп" NVARCHAR2(255) NULL,

	"Номер" NUMBER(10) NULL,

	"ЗаявНаСтр" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"Клиент" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Клиент"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"НомерПас" NUMBER(10) NULL,

	"СерияПас" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"ИНН" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СтрПолис"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"СрокДейст" NUMBER(10) NULL,

	"Номер" NUMBER(10) NULL,

	"ТеррСтр" NVARCHAR2(255) NULL,

	"СтрТариф" NUMBER(10) NULL,

	"Клиент" RAW(16) NOT NULL,

	"ДоговорСтр" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ДоговорСтр"
(

	"primaryKey" RAW(16) NOT NULL,

	"СтрСлучаи" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"СтрПремия" NUMBER(10) NULL,

	"Номер" NUMBER(10) NULL,

	"Клиент" RAW(16) NOT NULL,

	"ПердстЭксп" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ЗаявНаСтр"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"СрокСтр" NUMBER(10) NULL,

	"ВидСтр" NVARCHAR2(9) NULL,

	"СуммаСтр" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"Клиент" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDДолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDСотрудника" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ПердстЭксп"
	ADD CONSTRAINT "ПердстЭксп_FЗ_7385" FOREIGN KEY ("ЗаявНаСтр") REFERENCES "ЗаявНаСтр" ("primaryKey");

CREATE INDEX "ПердстЭксп_IЗ_4412" on "ПердстЭксп" ("ЗаявНаСтр");

ALTER TABLE "ПердстЭксп"
	ADD CONSTRAINT "ПердстЭксп_FС_1614" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ПердстЭксп_IС_9775" on "ПердстЭксп" ("Сотрудники");

ALTER TABLE "ПердстЭксп"
	ADD CONSTRAINT "ПердстЭксп_FК_9916" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "ПердстЭксп_IК_2360" on "ПердстЭксп" ("Клиент");

ALTER TABLE "СтрПолис"
	ADD CONSTRAINT "СтрПолис_FКли_2173" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "СтрПолис_IКлиент" on "СтрПолис" ("Клиент");

ALTER TABLE "СтрПолис"
	ADD CONSTRAINT "СтрПолис_FДог_6639" FOREIGN KEY ("ДоговорСтр") REFERENCES "ДоговорСтр" ("primaryKey");

CREATE INDEX "СтрПолис_IДог_2832" on "СтрПолис" ("ДоговорСтр");

ALTER TABLE "СтрПолис"
	ADD CONSTRAINT "СтрПолис_FСот_5686" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "СтрПолис_IСот_2462" on "СтрПолис" ("Сотрудники");

ALTER TABLE "ДоговорСтр"
	ADD CONSTRAINT "ДоговорСтр_FК_4020" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "ДоговорСтр_IК_2234" on "ДоговорСтр" ("Клиент");

ALTER TABLE "ДоговорСтр"
	ADD CONSTRAINT "ДоговорСтр_FП_4615" FOREIGN KEY ("ПердстЭксп") REFERENCES "ПердстЭксп" ("primaryKey");

CREATE INDEX "ДоговорСтр_IП_8315" on "ДоговорСтр" ("ПердстЭксп");

ALTER TABLE "ДоговорСтр"
	ADD CONSTRAINT "ДоговорСтр_FС_9892" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ДоговорСтр_IС_4704" on "ДоговорСтр" ("Сотрудники");

ALTER TABLE "ЗаявНаСтр"
	ADD CONSTRAINT "ЗаявНаСтр_FКл_1488" FOREIGN KEY ("Клиент") REFERENCES "Клиент" ("primaryKey");

CREATE INDEX "ЗаявНаСтр_IКл_2112" on "ЗаявНаСтр" ("Клиент");

ALTER TABLE "ЗаявНаСтр"
	ADD CONSTRAINT "ЗаявНаСтр_FСо_7106" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ЗаявНаСтр_IСо_6783" on "ЗаявНаСтр" ("Сотрудники");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_4635" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6967" on "Сотрудники" ("Должности");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


