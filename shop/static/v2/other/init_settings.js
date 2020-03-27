let _page_settings = {
	 'b-form__yourform'  : 'Ваша форма'
	,'b-form__languages'  : 'Языки'
	,'langs' : { 
			 "ru" : "Русский"
			,"en" : "Английский"
			,"uk" : "Украинский"
			,"de" : "Немецкий"
			}
	,'regexps' : {
			'name'   : '^[А-ЯЁа-яё \\-]{3,100}$'
			,'brand'  : '^[A-Za-z \\-\\$&\']{2,100}$'
			,'price'  : '^[1-9]\\d{0,4}(\\.\\d{2})?$'
			,'description' : '^[\\d\\D]{10,100}$'
  			}
	,'bags' : {
			 "box" : "Бокс"
			,"thin" : "Плоская"
			,"bottom" : "С донной складкой"
			,"sack" : "Мешок"
			,"bag" : "Сумка-майка"
			}
	,'colors' : {
			 "blue" : "Синий"
			,"red" : "Красный"
			,"green" : "Зеленый"
			,"gray" : "Серый"
			,"purple" : "Фиолетовый"
			,"pink" : "Розовый"
			,"black" : "Черный"
			,"white" : "Белый"
			,"violet" : "Сиреневый"
			,"brown" : "Коричневый"
			}
	,'paints' : {
			 "1" : "1+0"
			,"2" : "1+1"
			,"3" : "2+0"
			,"4" : "2+2"
			,"with" : "Со шнурком"
			,"wout" : "Без шнурка"
			}
 	};

settings.init(_page_settings);