from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import shutil
b=Path(__file__).resolve().parent/'assets';f=str(b/'montserrat-variable.ttf')

W,H=1920,1080;blue='#091E89';black='#101010';white='#FFFFFF'
def font(size,weight=400):
 ft=ImageFont.truetype(f,size);ft.set_variation_by_axes([weight]);return ft
def text(d,pos,s,size=30,weight=400,fill=blue):d.text(pos,s,font=font(size,weight),fill=fill)
im=Image.new('RGB',(W,H),'#F5F6F9');d=ImageDraw.Draw(im)
text(d,(88,70),'TYPOGRAPHY / 03',26,500);text(d,(1370,70),'TECHNO GROUP',26,500)
text(d,(80,142),'Montserrat',174,600)
d.line((88,378,1832,378),fill='#D8DCE7',width=2)
text(d,(72,415),'Aa',360,600)
text(d,(850,438),'Точність.',85,600);text(d,(850,548),'У кожній деталі.',74,400)
text(d,(853,696),'0123456789',70,400)
d.line((88,868,1832,868),fill='#D8DCE7',width=2)
for x,lab,w in [(88,'Regular 400',400),(685,'Medium 500',500),(1280,'SemiBold 600',600)]:text(d,(x,910),lab,41,w)
text(d,(88,998),'Аа Бб Вв Гг Ґґ Дд Ее Єє Жж Зз Ии Іі Її Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ьь Юю Яя',23,400)
im.save(b/'techno-typography-modern.webp',quality=96,method=6)

im=Image.new('RGB',(W,H),blue);d=ImageDraw.Draw(im)
for x1,x2,bg,fg,name,code,rgb in [(0,1056,blue,white,'Indigo Dye','#091E89','RGB 9 · 30 · 137'),(1056,1488,'#000000',white,'Black','#000000','RGB 0 · 0 · 0'),(1488,1920,white,blue,'White','#FFFFFF','RGB 255 · 255 · 255')]:
 d.rectangle((x1,0,x2,H),fill=bg)
 text(d,(x1+58,67),'01' if x1==0 else ('02' if x1==1056 else '03'),26,500,fg)
 text(d,(x1+58,768),name,48 if x1==0 else 42,500,fg)
 text(d,(x1+58,867),code,58 if x1==0 else 40,400,fg)
 text(d,(x1+58,973),rgb,23,400,fg)
text(d,(58,165),'Палітра\nточності.',116,600,white)
im.save(b/'techno-palette-modern.webp',quality=96,method=6)

print('Two modern brand slides created')
