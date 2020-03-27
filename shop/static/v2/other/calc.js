function Calculator(bagType, size, color, paint, quantity) {
	this.bagType = "box";
	this.size = "S";
	this.color = "blue";
	this.paint = "1";
	this.quantity = 0;

	this.set = function (property, value) {
		console.log(property);
		console.log(value);
		console.log(this[property]);
		this[property] = value;
		if (property === "bagType") {
			$(".option__type.selected").removeClass("selected");
			$('.chosen__type').text(settings.get('bags')[value]);
		} else if (property === "color") {
			$(".option__color.selected").removeClass("selected");
			$('.chosen__color').text(settings.get('colors')[value]);
		} else if (property === "size") {
			$('.chosen__size').text(value);
		} else if (property === "paint") {
			let to_put = (settings.get('paints')[value] ? settings.get('paints')[value] : value + 'г/м2');
			$('.chosen__print').text(to_put);
		}

		$("." + value).addClass("selected");

	};

	this.setOptions = function () {
		sizeBox = $('.size-slide');
		paintBox = $('.print-slide');

		let options = sizeBox.find('.size-option');
		if (this.bagType === "thin") {
			$.each(options, function () {
				if (this.className.includes('size__m')) {
					$(this).show();
					$(this).find('param-text').text('M (300x370 mm)');
				} else if (this.className.includes('size__l')) {
					$(this).show();
					$(this).find('param-text').text('L (350x420 mm)');
				} else {
					$(this).hide();
				}
			});

			$('.chosen__size').text('M');
			$('.chosen__print').text('1+0');
			this.size = "M";
			this.paint = "1";

			$('#selected-bag').attr("src", "/static/v2/img/bags/thin.png");
		} else if (this.bagType === "bottom") {
			$.each(options, function () {
				if (this.className.includes('size__l')) {
					$(this).show();
					$(this).find('param-text').text('L (420x320x100 mm)');
				} else if (this.className.includes('size__xl')) {
					$(this).show();
					$(this).find('param-text').text('XL (450x350x120 mm)');
				} else if (this.className.includes('size__xxl')) {
					$(this).show();
					$(this).find('param-text').text('XXL (530x400x130 mm)');
				} else {
					$(this).hide();
				}
			});

			this.size = "L";
			this.paint = "1";

			$('.chosen__size').text('L');
			$('.chosen__print').text('1+0');

			$('#selected-bag').attr("src", "/static/v2/img/bags/bottom.png");
		} else if (this.bagType === "box") {
			$.each(options, function () {
				if (this.className.includes('size__s')) {
					$(this).show();
					$(this).find('param-text').text('S (320x270x100 mm)');
				} else if (this.className.includes('size__m')) {
					$(this).show();
					$(this).find('param-text').text('M (385x320x120 mm)');
				} else if (this.className.includes('size__l')) {
					$(this).show();
					$(this).find('param-text').text('L (420x350x120 mm)');
				} else if (this.className.includes('size__xl')) {
					$(this).show();
					$(this).find('param-text').text('XL (500x420x140 mm)');
				} else if (this.className.includes('size__xxl')) {
					$(this).show();
					$(this).find('param-text').text('XXL (320x400x100 mm)');
				}
			});

			this.size = "S";
			this.paint = "1";

			$('.chosen__size').text('S');
			$('.chosen__print').text('1+0');


			$('#selected-bag').attr("src", "/static/v2/img/bags/box.png");
		} else if (this.bagType === "bag") {
			$.each(options, function () {
				if (this.className.includes('size__s')) {
					$(this).show();
					$(this).find('param-text').text('S (210x420x120 mm)');
				} else if (this.className.includes('size__m')) {
					$(this).show();
					$(this).find('param-text').text('M (250x450x130 mm)');
				} else if (this.className.includes('size__l')) {
					$(this).show();
					$(this).find('param-text').text('L (300x500x130 mm)');
				} else if (this.className.includes('size__xl')) {
					$(this).show();
					$(this).find('param-text').text('XL (350x560x140 mm)');
				} else if (this.className.includes('size__xxl')) {
					$(this).show();
					$(this).find('param-text').text('XXL (400x650x180 mm)');
				}
			});

			this.size = "S";
			this.paint = "30";

			$('.chosen__size').text('S');
			$('.chosen__print').text('30 г/м2');

			$('#selected-bag').attr("src", "/static/v2/img/bags/bag.jpg");
		} else if (this.bagType === "sack") {
			$.each(options, function () {
				if (this.className.includes('size__s')) {
					$(this).show();
					$(this).find('param-text').text('S (380x200 mm)');
				} else if (this.className.includes('size__m')) {
					$(this).show();
					$(this).find('param-text').text('M (380x350 mm)');
				} else if (this.className.includes('size__l')) {
					$(this).show();
					$(this).find('param-text').text('L (500x300 mm)');
				} else {
					$(this).hide();
				}
			});

			$('.chosen__size').text('S');
			$('.chosen__print').text('Со шнурком');

			this.size = "S";
			this.paint = "with";

			$('#selected-bag').attr("src", "/static/v2/img/bags/sack.png");
		}

		$('.print-option').remove();

		if (this.bagType === 'bag') {
			paintBox.find('.items').append('<div class="print__30 print-option" onclick="calculator.set(\'paint\', \'30\')">');
			$('.print__30').append('<p class="print-text">30 г/м2</p>');
			$('.print__30').append('<p class="desc-text">30 г/м2</p>');
			paintBox.find('.items').append('<div class="print__40 print-option" onclick="calculator.set(\'paint\', \'40\')">');
			$('.print__40').append('<p class="print-text">40 г/м2</p>');
			$('.print__40').append('<p class="desc-text">40 г/м2</p>');
			paintBox.find('.items').append('<div class="print__50 print-option" onclick="calculator.set(\'paint\', \'50\')">');
			$('.print__50').append('<p class="print-text">50 г/м2</p>');
			$('.print__50').append('<p class="desc-text">50 г/м2</p>');
			paintBox.find('.items').append('<div class="print__60 print-option" onclick="calculator.set(\'paint\', \'60\')">');
			$('.print__60').append('<p class="print-text">60 г/м2</p>');
			$('.print__60').append('<p class="desc-text">60 г/м2</p>');
			paintBox.find('.items').append('<div class="print__70 print-option" onclick="calculator.set(\'paint\', \'70\')">');
			$('.print__70').append('<p class="print-text">70 г/м2</p>');
			$('.print__70').append('<p class="desc-text">70 г/м2</p>');
			paintBox.find('.items').append('<div class="print__80 print-option" onclick="calculator.set(\'paint\', \'80\')">');
			$('.print__80').append('<p class="print-text">80 г/м2</p>');
			$('.print__80').append('<p class="desc-text">80 г/м2</p>');
			paintBox.find('.items').append('<div class="print__90 print-option" onclick="calculator.set(\'paint\', \'90\')">');
			$('.print__90').append('<p class="print-text">90 г/м2</p>');
			$('.print__90').append('<p class="desc-text">90 г/м2</p>');
		} else {
			paintBox.find('.items').append('<div class="print__10 print-option" onclick="calculator.set(\'paint\', \'1\')">');
			$('.print__10').append('<p class="print-text">1+0</p>');
			$('.print__10').append('<p class="desc-text">Печать с одной стороны</p>');
			paintBox.find('.items').append('<div class="print__11 print-option" onclick="calculator.set(\'paint\', \'2\')">');
			$('.print__11').append('<p class="print-text">1+1</p>');
			$('.print__11').append('<p class="desc-text">Печать с одной стороны</p>');
			paintBox.find('.items').append('<div class="print__20 print-option" onclick="calculator.set(\'paint\', \'3\')">');
			$('.print__20').append('<p class="print-text">2+0</p>');
			$('.print__20').append('<p class="desc-text">Печать с двух сторон</p>');
			paintBox.find('.items').append('<div class="print__22 print-option" onclick="calculator.set(\'paint\', \'4\')">');
			$('.print__22').append('<p class="print-text">2+2</p>');
			$('.print__22').append('<p class="desc-text">Печать с двух сторон</p>');
		}
	};

	// this.addToCart = function (identifier) {
	// 	let price = this.solve();
	// 	console.log('added');
	// 	if (this.bagType === "box") {
	// 		bagType = "Бокс"
	// 	} else if (this.bagType === "thin") {
	// 		bagType = "Плоская"
	// 	} else if (this.bagType === "bottom") {
	// 		bagType = "С донной складкой"
	// 	} else if (this.bagType === "bag") {
	// 		bagType = "Сумка-майка"
	// 	} else if (this.bagType === "sack") {
	// 		bagType = "Мешочек для обуви"
	// 	}

	// 	if (this.paint === "1") {
	// 		paint = "1+0"
	// 	} else if (this.paint === "2") {
	// 		paint = "1+1"
	// 	} else if (this.paint === "3") {
	// 		paint = "2+0"
	// 	} else if (this.paint === "4") {
	// 		paint = "2+2"
	// 	} else if (this.paint === "with") {
	// 		paint = "Со шнурком"
	// 	} else if (this.paint === "wout") {
	// 		paint = "Без шнурка"
	// 	} else {
	// 		paint = this.paint + " г/м2"
	// 	}

	// 	if (this.color === "white") {
	// 		color = "Белый"
	// 	} else if (this.color === "black") {
	// 		color = "Черный"
	// 	} else if (this.color === "green") {
	// 		color = "Зеленый"
	// 	} else if (this.color === "gray") {
	// 		color = "Серый"
	// 	} else if (this.color === "purple") {
	// 		color = "Фиолетовый"
	// 	} else if (this.color === "violet") {
	// 		color = "Сиреневый"
	// 	} else if (this.color === "pink") {
	// 		color = "Розовый"
	// 	} else if (this.color === "brown") {
	// 		color = "Коричневый"
	// 	} else if (this.color === "red") {
	// 		color = "Красный"
	// 	} else if (this.color === "blue") {
	// 		color = "Синий"
	// 	}

	// 	$('.products').append(`<div class="products__item-${identifier}"><div class="products__item-main"></div><div class="products__item-user-preferences"></div></div>`);
	// 	cur_prod = $('.products__item').last();
	// 	cur_prod.find('.products__item-main').append('<p class="products__item-type">' + bagType + ' (<span class="products__item-color">'+ color +'</span>)</p>');
	// 	cur_prod.find('.products__item-main').append('<div class="products__item-editables"></div>');
	// 	cur_prod.find('.products__item-editables').append('<p class="products__item-size">'+ this.size +'</p>');
	// 	cur_prod.find('.products__item-editables').append('<p class="products__item-print">'+ paint +'</p>');
	// 	cur_prod.find('.products__item-editables').append('<p class="products__item-quantity">'+ this.quantity +'</p>');
	// 	cur_prod.find('.products__item-user-preferences').append('<div class="products__item__price-wrapper"></div>');
	// 	cur_prod.find('.products__item__price-wrapper').append('<p class="products__item-price">'+ price +'</p>');
	// 	let fullprice = $('.products__fullprice');
	// 	fullprice.text((parseFloat(fullprice.text()) + parseFloat(price)).toFixed(2));
	// };

	this.solve = function () {
		this.quantity = parseInt($('.input__quantity').val());
		let price_for_one;
		if (this.quantity > 0 && !isNaN(this.quantity)) {
			if (this.bagType === "box") {		// Сумка бокс
				if (this.size === "S") {
					if (this.quantity > 20000) {
						price_for_one = 9.7;
					} else if (this.quantity > 10000) {
						price_for_one = 10.5;
					} else if (this.quantity > 5000) {
						price_for_one = 11.5;
					} else if (this.quantity > 2000) {
						price_for_one = 13;
					} else {
						price_for_one = 14.5;
					}
				} else if (this.size === "M") {
					if (this.quantity > 20000) {
						price_for_one = 10.7;
					} else if (this.quantity > 10000) {
						price_for_one = 11.5;
					} else if (this.quantity > 5000) {
						price_for_one = 12.5;
					} else if (this.quantity > 2000) {
						price_for_one = 14;
					} else {
						price_for_one = 15.5;
					}
				} else if (this.size === "L") {
					if (this.quantity > 20000) {
						price_for_one = 12.7;
					} else if (this.quantity > 10000) {
						price_for_one = 13.9;
					} else if (this.quantity > 5000) {
						price_for_one = 14.9;
					} else if (this.quantity > 2000) {
						price_for_one = 16.4;
					} else {
						price_for_one = 17.9;
					}
				} else if (this.size === "XL") {
					if (this.quantity > 20000) {
						price_for_one = 17;
					} else if (this.quantity > 10000) {
						price_for_one = 18;
					} else if (this.quantity > 5000) {
						price_for_one = 19.5;
					} else if (this.quantity > 2000) {
						price_for_one = 21;
					} else {
						price_for_one = 23;
					}
				} else if (this.size === "V") {
					if (this.quantity > 20000) {
						price_for_one = 10.7;
					} else if (this.quantity > 10000) {
						price_for_one = 11.5;
					} else if (this.quantity > 5000) {
						price_for_one = 12.5;
					} else if (this.quantity > 2000) {
						price_for_one = 14;
					} else {
						price_for_one = 15.5;
					}
				}
			} else if (this.bagType === "thin") {		// Плоская
				if (this.size === "M") {
					if (this.quantity > 20000) {
						price_for_one = 7.95;
					} else if (this.quantity > 10000) {
						price_for_one = 8.7;
					} else if (this.quantity > 5000) {
						price_for_one = 9.6;
					} else if (this.quantity > 2000) {
						price_for_one = 11;
					} else {
						price_for_one = 12.5;
					}
				} else if (this.size === "L") {
					if (this.quantity > 20000) {
						price_for_one = 8.95;
					} else if (this.quantity > 10000) {
						price_for_one = 9.7;
					} else if (this.quantity > 5000) {
						price_for_one = 10.6;
					} else if (this.quantity > 2000) {
						price_for_one = 12;
					} else {
						price_for_one = 13.5;
					}
				}
			} else if (this.bagType === "bottom") { // С донной складкой
				if (this.size === "L") {
					if (this.quantity > 20000) {
						price_for_one = 8.95;
					} else if (this.quantity > 10000) {
						price_for_one = 9.7;
					} else if (this.quantity > 5000) {
						price_for_one = 10.6;
					} else if (this.quantity > 2000) {
						price_for_one = 12;
					} else {
						price_for_one = 13.5;
					}
				} else if (this.size === "XL") {
					if (this.quantity > 20000) {
						price_for_one = 10.55;
					} else if (this.quantity > 10000) {
						price_for_one = 11.3;
					} else if (this.quantity > 5000) {
						price_for_one = 12.2;
					} else if (this.quantity > 2000) {
						price_for_one = 13.6;
					} else {
						price_for_one = 15.1;
					}
				} else if (this.size === "XXL") {
					if (this.quantity > 20000) {
						price_for_one = 11.9;
					} else if (this.quantity > 10000) {
						price_for_one = 12.65;
					} else if (this.quantity > 5000) {
						price_for_one = 13.6;
					} else if (this.quantity > 2000) {
						price_for_one = 15;
					} else {
						price_for_one = 16.5;
					}
				}
			} else if (this.bagType === "sack") {		// Мешочек
				if (this.size === "S") {
					if (this.quantity > 100000) {
						if (this.paint === "with") {
							price_for_one = 1.49;
						} else if (this.paint === "wout") {
							price_for_one = 1.45;
						}
					} else if (this.quantity > 60000) {
						if (this.paint === "with") {
							price_for_one = 1.6;
						} else if (this.paint === "wout") {
							price_for_one = 1.56;
						}
					} else if (this.quantity > 30000) {
						if (this.paint === "with") {
							price_for_one = 1.7;
						} else if (this.paint === "wout") {
							price_for_one = 1.66;
						}
					} else {
						if (this.paint === "with") {
							price_for_one = 1.85;
						} else if (this.paint === "wout") {
							price_for_one = 1.8;
						}
					}
				} else if (this.size === "M") {
					if (this.quantity > 100000) {
						if (this.paint === "with") {
							price_for_one = 1.85;
						} else if (this.paint === "wout") {
							price_for_one = 1.81;
						}
					} else if (this.quantity > 60000) {
						if (this.paint === "with") {
							price_for_one = 1.96;
						} else if (this.paint === "wout") {
							price_for_one = 1.92;
						}
					} else if (this.quantity > 30000) {
						if (this.paint === "with") {
							price_for_one = 2.07;
						} else if (this.paint === "wout") {
							price_for_one = 2.03;
						}
					} else {
						if (this.paint === "with") {
							price_for_one = 2.2;
						} else if (this.paint === "wout") {
							price_for_one = 2.15;
						}
					}
				} else if (this.size === "L") {
					if (this.quantity > 100000) {
						if (this.paint === "with") {
							price_for_one = 2.4;
						} else if (this.paint === "wout") {
							price_for_one = 2.36;
						}
					} else if (this.quantity > 60000) {
						if (this.paint === "with") {
							price_for_one = 2.55;
						} else if (this.paint === "wout") {
							price_for_one = 2.51;
						}
					} else if (this.quantity > 30000) {
						if (this.paint === "with") {
							price_for_one = 2.7;
						} else if (this.paint === "wout") {
							price_for_one = 2.66;
						}
					} else {
						if (this.paint === "with") {
							price_for_one = 2.85;
						} else if (this.paint === "wout") {
							price_for_one = 2.8;
						}
					}
				}
			} else if (this.bagType === "bag") {		// Сумка майка
				if (this.size === "S") {
					if (this.quantity > 500000) {
						if (this.paint === "30") {
							price_for_one = 2.5;
						} else if (this.paint === "40") {
							price_for_one = 2.83;
						} else if (this.paint === "50") {
							price_for_one = 3.16;
						} else if (this.paint === "60") {
							price_for_one = 3.49;
						} else if (this.paint === "70") {
							price_for_one = 3.82;
						} else if (this.paint === "80") {
							price_for_one = 4.15;
						} else if (this.paint === "90") {
							price_for_one = 4.48;
						}
					} else if (this.quantity > 200000) {
						if (this.paint === "30") {
							price_for_one = 2.75;
						} else if (this.paint === "40") {
							price_for_one = 3.09;
						} else if (this.paint === "50") {
							price_for_one = 3.42;
						} else if (this.paint === "60") {
							price_for_one = 3.76;
						} else if (this.paint === "70") {
							price_for_one = 4.09;
						} else if (this.paint === "80") {
							price_for_one = 4.43;
						} else if (this.paint === "90") {
							price_for_one = 4.76;
						}
					} else if (this.quantity > 100000) {
						if (this.paint === "30") {
							price_for_one = 3;
						} else if (this.paint === "40") {
							price_for_one = 3.34;
						} else if (this.paint === "50") {
							price_for_one = 3.68;
						} else if (this.paint === "60") {
							price_for_one = 4.02;
						} else if (this.paint === "70") {
							price_for_one = 4.36;
						} else if (this.paint === "80") {
							price_for_one = 4.71;
						} else if (this.paint === "90") {
							price_for_one = 5.05;
						}
					} else if (this.quantity > 50000) {
						if (this.paint === "30") {
							price_for_one = 3.5;
						} else if (this.paint === "40") {
							price_for_one = 3.85;
						} else if (this.paint === "50") {
							price_for_one = 4.21;
						} else if (this.paint === "60") {
							price_for_one = 4.56;
						} else if (this.paint === "70") {
							price_for_one = 4.91;
						} else if (this.paint === "80") {
							price_for_one = 5.26;
						} else if (this.paint === "90") {
							price_for_one = 5.62;
						}
					} else if (this.quantity > 20000) {
						if (this.paint === "30") {
							price_for_one = 4;
						} else if (this.paint === "40") {
							price_for_one = 4.36;
						} else if (this.paint === "50") {
							price_for_one = 4.73;
						} else if (this.paint === "60") {
							price_for_one = 5.09;
						} else if (this.paint === "70") {
							price_for_one = 5.46;
						} else if (this.paint === "80") {
							price_for_one = 5.82;
						} else if (this.paint === "90") {
							price_for_one = 6.19;
						}
					} else if (this.quantity > 10000) {
						if (this.paint === "30") {
							price_for_one = 4.7;
						} else if (this.paint === "40") {
							price_for_one = 5.08;
						} else if (this.paint === "50") {
							price_for_one = 5.45;
						} else if (this.paint === "60") {
							price_for_one = 5.83;
						} else if (this.paint === "70") {
							price_for_one = 6.21;
						} else if (this.paint === "80") {
							price_for_one = 6.58;
						} else if (this.paint === "90") {
							price_for_one = 6.96;
						}
					} else if (this.quantity > 5000) {
						if (this.paint === "30") {
							price_for_one = 5.5;
						} else if (this.paint === "40") {
							price_for_one = 5.9;
						} else if (this.paint === "50") {
							price_for_one = 6.3;
						} else if (this.paint === "60") {
							price_for_one = 6.7;
						} else if (this.paint === "70") {
							price_for_one = 7.1;
						} else if (this.paint === "80") {
							price_for_one = 7.5;
						} else if (this.paint === "90") {
							price_for_one = 7.9;
						}
					} else {
						if (this.paint === "30") {
							price_for_one = 6;
						} else if (this.paint === "40") {
							price_for_one = 6.42;
						} else if (this.paint === "50") {
							price_for_one = 6.85;
						} else if (this.paint === "60") {
							price_for_one = 7.27;
						} else if (this.paint === "70") {
							price_for_one = 7.69;
						} else if (this.paint === "80") {
							price_for_one = 8.12;
						} else if (this.paint === "90") {
							price_for_one = 8.54;
						}
					}
				} else if (this.size === "M") {
					if (this.quantity > 500000) {
						if (this.paint === "30") {
							price_for_one = 3;
						} else if (this.paint === "40") {
							price_for_one = 3.4;
						} else if (this.paint === "50") {
							price_for_one = 3.81;
						} else if (this.paint === "60") {
							price_for_one = 4.21;
						} else if (this.paint === "70") {
							price_for_one = 4.61;
						} else if (this.paint === "80") {
							price_for_one = 5.02;
						} else if (this.paint === "90") {
							price_for_one = 5.42;
						}
					} else if (this.quantity > 200000) {
						if (this.paint === "30") {
							price_for_one = 3.25;
						} else if (this.paint === "40") {
							price_for_one = 3.66;
						} else if (this.paint === "50") {
							price_for_one = 4.07;
						} else if (this.paint === "60") {
							price_for_one = 4.48;
						} else if (this.paint === "70") {
							price_for_one = 4.89;
						} else if (this.paint === "80") {
							price_for_one = 5.3;
						} else if (this.paint === "90") {
							price_for_one = 5.71;
						}
					} else if (this.quantity > 100000) {
						if (this.paint === "30") {
							price_for_one = 3.5;
						} else if (this.paint === "40") {
							price_for_one = 3.92;
						} else if (this.paint === "50") {
							price_for_one = 4.34;
						} else if (this.paint === "60") {
							price_for_one = 4.75;
						} else if (this.paint === "70") {
							price_for_one = 5.17;
						} else if (this.paint === "80") {
							price_for_one = 5.59;
						} else if (this.paint === "90") {
							price_for_one = 6.01;
						}
					} else if (this.quantity > 50000) {
						if (this.paint === "30") {
							price_for_one = 4;
						} else if (this.paint === "40") {
							price_for_one = 4.43;
						} else if (this.paint === "50") {
							price_for_one = 4.86;
						} else if (this.paint === "60") {
							price_for_one = 5.3;
						} else if (this.paint === "70") {
							price_for_one = 5.73;
						} else if (this.paint === "80") {
							price_for_one = 6.16;
						} else if (this.paint === "90") {
							price_for_one = 6.59;
						}
					} else if (this.quantity > 20000) {
						if (this.paint === "30") {
							price_for_one = 4.5;
						} else if (this.paint === "40") {
							price_for_one = 4.95;
						} else if (this.paint === "50") {
							price_for_one = 5.39;
						} else if (this.paint === "60") {
							price_for_one = 5.84;
						} else if (this.paint === "70") {
							price_for_one = 6.29;
						} else if (this.paint === "80") {
							price_for_one = 6.73;
						} else if (this.paint === "90") {
							price_for_one = 7.18;
						}
					} else if (this.quantity > 10000) {
						if (this.paint === "30") {
							price_for_one = 5.2;
						} else if (this.paint === "40") {
							price_for_one = 5.66;
						} else if (this.paint === "50") {
							price_for_one = 6.12;
						} else if (this.paint === "60") {
							price_for_one = 6.58;
						} else if (this.paint === "70") {
							price_for_one = 7.04;
						} else if (this.paint === "80") {
							price_for_one = 7.5;
						} else if (this.paint === "90") {
							price_for_one = 7.96;
						}
					} else if (this.quantity > 5000) {
						if (this.paint === "30") {
							price_for_one = 6;
						} else if (this.paint === "40") {
							price_for_one = 6.49;
						} else if (this.paint === "50") {
							price_for_one = 6.98;
						} else if (this.paint === "60") {
							price_for_one = 7.47;
						} else if (this.paint === "70") {
							price_for_one = 7.96;
						} else if (this.paint === "80") {
							price_for_one = 8.45;
						} else if (this.paint === "90") {
							price_for_one = 8.94;
						}
					} else {
						if (this.paint === "30") {
							price_for_one = 6.5;
						} else if (this.paint === "40") {
							price_for_one = 7.3;
						} else if (this.paint === "50") {
							price_for_one = 7.54;
						} else if (this.paint === "60") {
							price_for_one = 8.06;
						} else if (this.paint === "70") {
							price_for_one = 8.57;
						} else if (this.paint === "80") {
							price_for_one = 9.09;
						} else if (this.paint === "90") {
							price_for_one = 9.61;
						}
					}
				} else if (this.size === "L") {
					if (this.quantity > 500000) {
						if (this.paint === "30") {
							price_for_one = 3.5;
						} else if (this.paint === "40") {
							price_for_one = 4;
						} else if (this.paint === "50") {
							price_for_one = 4.51;
						} else if (this.paint === "60") {
							price_for_one = 5.01;
						} else if (this.paint === "70") {
							price_for_one = 5.52;
						} else if (this.paint === "80") {
							price_for_one = 6.02;
						} else if (this.paint === "90") {
							price_for_one = 6.52;
						}
					} else if (this.quantity > 200000) {
						if (this.paint === "30") {
							price_for_one = 3.75;
						} else if (this.paint === "40") {
							price_for_one = 4.26;
						} else if (this.paint === "50") {
							price_for_one = 4.78;
						} else if (this.paint === "60") {
							price_for_one = 5.29;
						} else if (this.paint === "70") {
							price_for_one = 5.8;
						} else if (this.paint === "80") {
							price_for_one = 6.32;
						} else if (this.paint === "90") {
							price_for_one = 6.83;
						}
					} else if (this.quantity > 100000) {
						if (this.paint === "30") {
							price_for_one = 4;
						} else if (this.paint === "40") {
							price_for_one = 4.52;
						} else if (this.paint === "50") {
							price_for_one = 5.04;
						} else if (this.paint === "60") {
							price_for_one = 5.57;
						} else if (this.paint === "70") {
							price_for_one = 6.09;
						} else if (this.paint === "80") {
							price_for_one = 6.61;
						} else if (this.paint === "90") {
							price_for_one = 7.13;
						}
					} else if (this.quantity > 50000) {
						if (this.paint === "30") {
							price_for_one = 4.5;
						} else if (this.paint === "40") {
							price_for_one = 5.04;
						} else if (this.paint === "50") {
							price_for_one = 5.58;
						} else if (this.paint === "60") {
							price_for_one = 6.12;
						} else if (this.paint === "70") {
							price_for_one = 6.66;
						} else if (this.paint === "80") {
							price_for_one = 7.2;
						} else if (this.paint === "90") {
							price_for_one = 7.74;
						}
					} else if (this.quantity > 20000) {
						if (this.paint === "30") {
							price_for_one = 5;
						} else if (this.paint === "40") {
							price_for_one = 5.56;
						} else if (this.paint === "50") {
							price_for_one = 6.12;
						} else if (this.paint === "60") {
							price_for_one = 6.67;
						} else if (this.paint === "70") {
							price_for_one = 7.23;
						} else if (this.paint === "80") {
							price_for_one = 7.79;
						} else if (this.paint === "90") {
							price_for_one = 8.35;
						}
					} else if (this.quantity > 10000) {
						if (this.paint === "30") {
							price_for_one = 5.7;
						} else if (this.paint === "40") {
							price_for_one = 6.28;
						} else if (this.paint === "50") {
							price_for_one = 6.85;
						} else if (this.paint === "60") {
							price_for_one = 7.43;
						} else if (this.paint === "70") {
							price_for_one = 8;
						} else if (this.paint === "80") {
							price_for_one = 8.58;
						} else if (this.paint === "90") {
							price_for_one = 9.16;
						}
					} else if (this.quantity > 5000) {
						if (this.paint === "30") {
							price_for_one = 6.5;
						} else if (this.paint === "40") {
							price_for_one = 7.11;
						} else if (this.paint === "50") {
							price_for_one = 7.72;
						} else if (this.paint === "60") {
							price_for_one = 8.34;
						} else if (this.paint === "70") {
							price_for_one = 8.95;
						} else if (this.paint === "80") {
							price_for_one = 9.56;
						} else if (this.paint === "90") {
							price_for_one = 10.17;
						}
					} else {
						if (this.paint === "30") {
							price_for_one = 7;
						} else if (this.paint === "40") {
							price_for_one = 8.04;
						} else if (this.paint === "50") {
							price_for_one = 8.3;
						} else if (this.paint === "60") {
							price_for_one = 8.94;
						} else if (this.paint === "70") {
							price_for_one = 9.59;
						} else if (this.paint === "80") {
							price_for_one = 10.24;
						} else if (this.paint === "90") {
							price_for_one = 10.89;
						}
					}
				} else if (this.size === "XL") {
					if (this.quantity > 500000) {
						if (this.paint === "30") {
							price_for_one = 4.5;
						} else if (this.paint === "40") {
							price_for_one = 5.13;
						} else if (this.paint === "50") {
							price_for_one = 5.75;
						} else if (this.paint === "60") {
							price_for_one = 6.38;
						} else if (this.paint === "70") {
							price_for_one = 7.01;
						} else if (this.paint === "80") {
							price_for_one = 7.64;
						} else if (this.paint === "90") {
							price_for_one = 8.26;
						}
					} else if (this.quantity > 200000) {
						if (this.paint === "30") {
							price_for_one = 4.75;
						} else if (this.paint === "40") {
							price_for_one = 5.39;
						} else if (this.paint === "50") {
							price_for_one = 6.03;
						} else if (this.paint === "60") {
							price_for_one = 6.67;
						} else if (this.paint === "70") {
							price_for_one = 7.3;
						} else if (this.paint === "80") {
							price_for_one = 7.94;
						} else if (this.paint === "90") {
							price_for_one = 8.58;
						}
					} else if (this.quantity > 100000) {
						if (this.paint === "30") {
							price_for_one = 5;
						} else if (this.paint === "40") {
							price_for_one = 5.65;
						} else if (this.paint === "50") {
							price_for_one = 6.3;
						} else if (this.paint === "60") {
							price_for_one = 6.95;
						} else if (this.paint === "70") {
							price_for_one = 7.6;
						} else if (this.paint === "80") {
							price_for_one = 8.25;
						} else if (this.paint === "90") {
							price_for_one = 8.9;
						}
					} else if (this.quantity > 50000) {
						if (this.paint === "30") {
							price_for_one = 5.5;
						} else if (this.paint === "40") {
							price_for_one = 6.17;
						} else if (this.paint === "50") {
							price_for_one = 6.84;
						} else if (this.paint === "60") {
							price_for_one = 7.52;
						} else if (this.paint === "70") {
							price_for_one = 8.19;
						} else if (this.paint === "80") {
							price_for_one = 8.86;
						} else if (this.paint === "90") {
							price_for_one = 9.53;
						}
					} else if (this.quantity > 20000) {
						if (this.paint === "30") {
							price_for_one = 6;
						} else if (this.paint === "40") {
							price_for_one = 6.69;
						} else if (this.paint === "50") {
							price_for_one = 7.39;
						} else if (this.paint === "60") {
							price_for_one = 8.08;
						} else if (this.paint === "70") {
							price_for_one = 8.78;
						} else if (this.paint === "80") {
							price_for_one = 9.47;
						} else if (this.paint === "90") {
							price_for_one = 10.17;
						}
					} else if (this.quantity > 10000) {
						if (this.paint === "30") {
							price_for_one = 6.7;
						} else if (this.paint === "40") {
							price_for_one = 7.42;
						} else if (this.paint === "50") {
							price_for_one = 8.13;
						} else if (this.paint === "60") {
							price_for_one = 8.85;
						} else if (this.paint === "70") {
							price_for_one = 9.57;
						} else if (this.paint === "80") {
							price_for_one = 10.28;
						} else if (this.paint === "90") {
							price_for_one = 11;
						}
					} else if (this.quantity > 5000) {
						if (this.paint === "30") {
							price_for_one = 7.5;
						} else if (this.paint === "40") {
							price_for_one = 8.26;
						} else if (this.paint === "50") {
							price_for_one = 9.02;
						} else if (this.paint === "60") {
							price_for_one = 9.78;
						} else if (this.paint === "70") {
							price_for_one = 10.55;
						} else if (this.paint === "80") {
							price_for_one = 11.31;
						} else if (this.paint === "90") {
							price_for_one = 12.07;
						}
					} else {
						if (this.paint === "30") {
							price_for_one = 8;
						} else if (this.paint === "40") {
							price_for_one = 9.28;
						} else if (this.paint === "50") {
							price_for_one = 9.61;
						} else if (this.paint === "60") {
							price_for_one = 10.42;
						} else if (this.paint === "70") {
							price_for_one = 11.23;
						} else if (this.paint === "80") {
							price_for_one = 12.03;
						} else if (this.paint === "90") {
							price_for_one = 12.84;
						}
					}
				} else if (this.size === "XXL") {
					if (this.quantity > 500000) {
						if (this.paint === "30") {
							price_for_one = 5.5;
						} else if (this.paint === "40") {
							price_for_one = 6.37;
						} else if (this.paint === "50") {
							price_for_one = 7.25;
						} else if (this.paint === "60") {
							price_for_one = 8.12;
						} else if (this.paint === "70") {
							price_for_one = 8.99;
						} else if (this.paint === "80") {
							price_for_one = 9.87;
						} else if (this.paint === "90") {
							price_for_one = 10.74;
						}
					} else if (this.quantity > 200000) {
						if (this.paint === "30") {
							price_for_one = 5.75;
						} else if (this.paint === "40") {
							price_for_one = 6.64;
						} else if (this.paint === "50") {
							price_for_one = 7.53;
						} else if (this.paint === "60") {
							price_for_one = 8.42;
						} else if (this.paint === "70") {
							price_for_one = 9.31;
						} else if (this.paint === "80") {
							price_for_one = 10.2;
						} else if (this.paint === "90") {
							price_for_one = 11.09;
						}
					} else if (this.quantity > 100000) {
						if (this.paint === "30") {
							price_for_one = 6;
						} else if (this.paint === "40") {
							price_for_one = 6.9;
						} else if (this.paint === "50") {
							price_for_one = 7.81;
						} else if (this.paint === "60") {
							price_for_one = 8.71;
						} else if (this.paint === "70") {
							price_for_one = 9.62;
						} else if (this.paint === "80") {
							price_for_one = 10.52;
						} else if (this.paint === "90") {
							price_for_one = 11.43;
						}
					} else if (this.quantity > 50000) {
						if (this.paint === "30") {
							price_for_one = 6.5;
						} else if (this.paint === "40") {
							price_for_one = 7.44;
						} else if (this.paint === "50") {
							price_for_one = 8.37;
						} else if (this.paint === "60") {
							price_for_one = 9.31;
						} else if (this.paint === "70") {
							price_for_one = 10.24;
						} else if (this.paint === "80") {
							price_for_one = 11.18;
						} else if (this.paint === "90") {
							price_for_one = 12.12;
						}
					} else if (this.quantity > 20000) {
						if (this.paint === "30") {
							price_for_one = 7;
						} else if (this.paint === "40") {
							price_for_one = 7.97;
						} else if (this.paint === "50") {
							price_for_one = 8.93;
						} else if (this.paint === "60") {
							price_for_one = 9.9;
						} else if (this.paint === "70") {
							price_for_one = 10.87;
						} else if (this.paint === "80") {
							price_for_one = 11.84;
						} else if (this.paint === "90") {
							price_for_one = 12.8;
						}
					} else if (this.quantity > 10000) {
						if (this.paint === "30") {
							price_for_one = 7.7;
						} else if (this.paint === "40") {
							price_for_one = 8.7;
						} else if (this.paint === "50") {
							price_for_one = 9.7;
						} else if (this.paint === "60") {
							price_for_one = 10.7;
						} else if (this.paint === "70") {
							price_for_one = 11.69;
						} else if (this.paint === "80") {
							price_for_one = 12.69;
						} else if (this.paint === "90") {
							price_for_one = 13.69;
						}
					} else if (this.quantity > 5000) {
						if (this.paint === "30") {
							price_for_one = 8.5;
						} else if (this.paint === "40") {
							price_for_one = 9.56;
						} else if (this.paint === "50") {
							price_for_one = 10.62;
						} else if (this.paint === "60") {
							price_for_one = 11.68;
						} else if (this.paint === "70") {
							price_for_one = 12.74;
						} else if (this.paint === "80") {
							price_for_one = 13.8;
						} else if (this.paint === "90") {
							price_for_one = 14.86;
						}
					} else {
						if (this.paint === "30") {
							price_for_one = 9;
						} else if (this.paint === "40") {
							price_for_one = 10.07;
						} else if (this.paint === "50") {
							price_for_one = 11.25;
						} else if (this.paint === "60") {
							price_for_one = 12.37;
						} else if (this.paint === "70") {
							price_for_one = 13.49;
						} else if (this.paint === "80") {
							price_for_one = 14.62;
						} else if (this.paint === "90") {
							price_for_one = 15.74;
						}
					}
				}
			}

			if (this.bagType !== "bag") {
				if (this.paint == 1) {
					if (this.quantity > 20000) {
						paint_price = 1.5;
					} else if (this.quantity > 10000) {
						paint_price = 2;
					} else if (this.quantity > 5000) {
						paint_price = 2.5;
					} else if (this.quantity > 2000) {
						paint_price = 3;
					} else {
						paint_price = 4;
					}
				} else if (this.paint == 2) {
					if (this.quantity > 20000) {
						paint_price = 2.5;
					} else if (this.quantity > 10000) {
						paint_price = 3.5;
					} else if (this.quantity > 5000) {
						paint_price = 4.5;
					} else if (this.quantity > 2000) {
						paint_price = 5;
					} else {
						paint_price = 6.5;
					}
				} else if (this.paint == 3) {
					if (this.quantity > 20000) {
						paint_price = 3;
					} else if (this.quantity > 10000) {
						paint_price = 4;
					} else if (this.quantity > 5000) {
						paint_price = 5;
					} else if (this.quantity > 2000) {
						paint_price = 6;
					} else {
						paint_price = 8;
					}
				} else {
					if (this.quantity > 20000) {
						paint_price = 5;
					} else if (this.quantity > 10000) {
						paint_price = 7;
					} else if (this.quantity > 5000) {
						paint_price = 9;
					} else if (this.quantity > 2000) {
						paint_price = 10;
					} else {
						paint_price = 13;
					}
				}
				result = (price_for_one * this.quantity + paint_price * this.quantity).toFixed(2);
			} else {
				result = (price_for_one * this.quantity).toFixed(2)
			}
		} else {
			$('.res-th').text("Стоимость");
			return null;
		}
		$('.res-th').text(result);
		return result;
	};
	input = $('.input__quantity');
	// input.oninput = this.solve.bind(this);
	return this;
}

