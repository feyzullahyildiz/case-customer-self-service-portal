# Nedir

Typescript ile yazılmış bir React (v18.2.0) uygulamasıdır. Mümkün olduğunca pure ve pixel perfect olması için uğraştım. Herhangi bir arayüz kütüphanesi kullanmadım, tüm cssleri kendim yazdım, genel olarak flexbox kullanmak için ve responsive olması için gayret ettim.

Sass biliyorum ama React'a css modules'u daha da yakıştırıyorum, o yüzden css modules kullanmayı tercih ettim. (İkisi beraber kullanılıyor ise bilmiyorum)


### Genel yapı

- Veri filtrelemesi için bir tane servisimiz var. [PersonService](./src/service/person.service.ts)
- css modules kullanılmıştır
- [App.tsx](./src/App.tsx) componenti dışında 3 tane componentimiz var ([bknz](./src/components/index.ts))
  - [Search](./src/components/search/index.tsx)
  - [PersonList](./src/components/person-list/index.tsx)
  - [PersonListItem](./src/components/person-list-item/index.tsx)
- Testleri yazılan yerler
  - [Search](./src/components/search/search.test.tsx)
  - [PersonListItem](./src/components/person-list-item/person-list-item.test.tsx)
### Diğer kütüphaneler
  - classnames (class birleştirmek için kullanıyoruz)
  - faker-js/faker (örnek data üretmesi için kullanıyoruz)
  - reset-css (genel css ayarlarını sıfırlamak için)
  - eslint
  - prettier
  - husky (commit öncesi eslint ve prettier'ı otomatik çalıştırır)
