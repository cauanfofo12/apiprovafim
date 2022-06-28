create database vilao;
drop database vilao;
use vilao;

create table tb_vilao(
id_vilao int primary key auto_increment,
nm_vilao varchar(100),
ds_maldades varchar(200),
bt_super_poder boolean
);

select * from tb_vilao;