import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartItems, setCartItems] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('');

  const products = [
    {
      id: 1,
      name: 'Урбан Худи',
      price: 3490,
      image: '/img/bb9b0340-7ce1-4be0-bc7e-46c5843bb7f7.jpg',
      brand: 'StreetStyle',
      colors: ['Черный', 'Белый', 'Серый'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      style: 'Уличный'
    },
    {
      id: 2,
      name: 'Тренд Футболка',
      price: 1990,
      image: '/img/bb9b0340-7ce1-4be0-bc7e-46c5843bb7f7.jpg',
      brand: 'YouthFlex',
      colors: ['Розовый', 'Мятный', 'Желтый'],
      sizes: ['XS', 'S', 'M', 'L'],
      style: 'Повседневный'
    },
    {
      id: 3,
      name: 'Стайл Кроссовки',
      price: 5990,
      image: '/img/bb9b0340-7ce1-4be0-bc7e-46c5843bb7f7.jpg',
      brand: 'FreshKicks',
      colors: ['Белый', 'Черный', 'Мульти'],
      sizes: ['36', '37', '38', '39', '40', '41', '42', '43'],
      style: 'Спортивный'
    },
    {
      id: 4,
      name: 'Деним Джинсы',
      price: 4490,
      image: '/img/bb9b0340-7ce1-4be0-bc7e-46c5843bb7f7.jpg',
      brand: 'DenimCrew',
      colors: ['Синий', 'Черный', 'Серый'],
      sizes: ['26', '28', '30', '32', '34', '36'],
      style: 'Классический'
    },
    {
      id: 5,
      name: 'Винтаж Куртка',
      price: 6990,
      image: '/img/bb9b0340-7ce1-4be0-bc7e-46c5843bb7f7.jpg',
      brand: 'RetroVibes',
      colors: ['Коричневый', 'Зеленый', 'Черный'],
      sizes: ['S', 'M', 'L', 'XL'],
      style: 'Винтаж'
    },
    {
      id: 6,
      name: 'График Свитшот',
      price: 2990,
      image: '/img/bb9b0340-7ce1-4be0-bc7e-46c5843bb7f7.jpg',
      brand: 'GraphicTee',
      colors: ['Белый', 'Черный', 'Розовый'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      style: 'Графический'
    }
  ];

  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  const filteredProducts = products.filter(product => {
    return (
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedStyle || product.style === selectedStyle) &&
      (!selectedSize || product.sizes.includes(selectedSize)) &&
      (!selectedColor || product.colors.includes(selectedColor))
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF6B6B] via-[#4ECDC4] to-[#FFEAA7] font-['Montserrat']">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center">
              <Icon name="Shirt" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">YOUTH FASHION</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-[#FFEAA7] transition-colors">Главная</a>
            <a href="#catalog" className="text-white hover:text-[#FFEAA7] transition-colors">Каталог</a>
            <a href="#" className="text-white hover:text-[#FFEAA7] transition-colors">О нас</a>
            <a href="#" className="text-white hover:text-[#FFEAA7] transition-colors">Контакты</a>
          </nav>

          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/20">
                  <Icon name="ShoppingBag" size={20} />
                  {cartItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-[#FF6B6B] text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs animate-scale-in">
                      {cartItems}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white">
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                  <SheetDescription>
                    У вас {cartItems} товар(ов) в корзине
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8">
                  {cartItems > 0 ? (
                    <div className="space-y-4">
                      <p className="text-gray-600">Товары добавлены в корзину!</p>
                      <Button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] hover:from-[#FF5252] hover:to-[#26A69A]">
                        Оформить заказ
                      </Button>
                    </div>
                  ) : (
                    <p className="text-gray-500">Корзина пуста</p>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Молодежная мода
              <span className="block bg-gradient-to-r from-[#FFEAA7] to-[#FF6B6B] bg-clip-text text-transparent">
                нового поколения
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 animate-fade-in">
              Откройте для себя самые трендовые образы и стили от ведущих дизайнеров
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-white text-[#FF6B6B] hover:bg-white/90 hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Смотреть каталог
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#FF6B6B] hover:scale-105 transition-all duration-300"
              >
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-white" />
        </div>
      </section>

      {/* Filters Section */}
      <section id="catalog" className="py-12 bg-white/10 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Каталог товаров</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Выберите бренд" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все бренды</SelectItem>
                <SelectItem value="StreetStyle">StreetStyle</SelectItem>
                <SelectItem value="YouthFlex">YouthFlex</SelectItem>
                <SelectItem value="FreshKicks">FreshKicks</SelectItem>
                <SelectItem value="DenimCrew">DenimCrew</SelectItem>
                <SelectItem value="RetroVibes">RetroVibes</SelectItem>
                <SelectItem value="GraphicTee">GraphicTee</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedStyle} onValueChange={setSelectedStyle}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Выберите стиль" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все стили</SelectItem>
                <SelectItem value="Уличный">Уличный</SelectItem>
                <SelectItem value="Повседневный">Повседневный</SelectItem>
                <SelectItem value="Спортивный">Спортивный</SelectItem>
                <SelectItem value="Классический">Классический</SelectItem>
                <SelectItem value="Винтаж">Винтаж</SelectItem>
                <SelectItem value="Графический">Графический</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Выберите размер" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все размеры</SelectItem>
                <SelectItem value="XS">XS</SelectItem>
                <SelectItem value="S">S</SelectItem>
                <SelectItem value="M">M</SelectItem>
                <SelectItem value="L">L</SelectItem>
                <SelectItem value="XL">XL</SelectItem>
                <SelectItem value="36">36</SelectItem>
                <SelectItem value="37">37</SelectItem>
                <SelectItem value="38">38</SelectItem>
                <SelectItem value="39">39</SelectItem>
                <SelectItem value="40">40</SelectItem>
                <SelectItem value="26">26</SelectItem>
                <SelectItem value="28">28</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="32">32</SelectItem>
                <SelectItem value="34">34</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Выберите цвет" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все цвета</SelectItem>
                <SelectItem value="Черный">Черный</SelectItem>
                <SelectItem value="Белый">Белый</SelectItem>
                <SelectItem value="Серый">Серый</SelectItem>
                <SelectItem value="Розовый">Розовый</SelectItem>
                <SelectItem value="Мятный">Мятный</SelectItem>
                <SelectItem value="Желтый">Желтый</SelectItem>
                <SelectItem value="Синий">Синий</SelectItem>
                <SelectItem value="Коричневый">Коричневый</SelectItem>
                <SelectItem value="Зеленый">Зеленый</SelectItem>
                <SelectItem value="Мульти">Мульти</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="bg-white/90 backdrop-blur-lg hover:scale-105 transition-all duration-300 animate-fade-in">
                <CardHeader className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-[#4ECDC4]/20 text-[#4ECDC4]">
                      {product.brand}
                    </Badge>
                    <Badge variant="outline" className="border-[#FF6B6B] text-[#FF6B6B]">
                      {product.style}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 mb-3">
                    Цвета: {product.colors.join(', ')}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#FF6B6B]">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="icon" className="hover:bg-[#FF6B6B]/10">
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] hover:from-[#FF5252] hover:to-[#26A69A] hover:scale-105 transition-all duration-300"
                    onClick={addToCart}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-white/50 mx-auto mb-4" />
              <p className="text-white/70 text-lg">Товары не найдены. Попробуйте изменить фильтры.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Быстрая доставка</h4>
              <p className="text-white/70">Доставка по всей России за 1-3 дня</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4ECDC4] to-[#FFEAA7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="RotateCcw" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Легкий возврат</h4>
              <p className="text-white/70">30 дней на возврат без вопросов</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FFEAA7] to-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Гарантия качества</h4>
              <p className="text-white/70">Только оригинальные бренды</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-lg py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] rounded-full flex items-center justify-center">
                  <Icon name="Shirt" size={16} className="text-white" />
                </div>
                <h5 className="text-lg font-bold text-white">YOUTH FASHION</h5>
              </div>
              <p className="text-white/70 text-sm">
                Твой стиль, твои правила. Современная мода для молодых и дерзких.
              </p>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4">Покупателям</h6>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат товара</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Размерная сетка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4">Компания</h6>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Партнерам</a></li>
              </ul>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4">Соцсети</h6>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Icon name="Instagram" size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                  <Icon name="Youtube" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © 2024 Youth Fashion. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;