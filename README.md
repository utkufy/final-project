# Mobil Uygulama Dokümantasyonu

Uİ UX KISMI VE TEST KISMI YOK BURADA HABERİNİZ OLSUN
## İletişim Bileşeni (Communication.js)

### Kullanılan Kütüphaneler
```javascript
import * as Contacts from 'expo-contacts';
import { Linking } from 'react-native';
```

### Kod Açıklamaları

1. **Rehber İzni ve Kişileri Alma**
```javascript
const { status } = await Contacts.requestPermissionsAsync();
```
- Bu kod, kullanıcıdan telefon rehberine erişim izni ister
- Kullanıcı izni kabul ederse 'granted' durumu döner
- İzin reddedilirse, rehbere erişilemez

```javascript
const { data } = await Contacts.getContactsAsync({
    fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
});
```
- İzin alındıktan sonra rehberdeki kişileri getirir
- Sadece telefon numarası ve isim bilgilerini alır
- Veriler 'data' değişkeninde saklanır

2. **Arama ve Mesaj Fonksiyonları**
```javascript
const handleCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
};

const handleMessage = (phoneNumber) => {
    Linking.openURL(`sms:${phoneNumber}`);
};
```
- `handleCall`: Telefon numarasına tıklandığında arama uygulamasını açar
- `handleMessage`: Mesaj butonuna tıklandığında SMS uygulamasını açar

## Harita Bileşeni (Map.js)

### Kullanılan Kütüphaneler
```javascript
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
```

### Kod Açıklamaları

1. **Konum İzni ve Alma**
```javascript
let { status } = await Location.requestForegroundPermissionsAsync();
```
- Kullanıcıdan konum izni ister
- Ön plan konum izni için gereklidir

```javascript
let loc = await Location.getCurrentPositionAsync({});
```
- Cihazın mevcut konumunu alır
- Enlem ve boylam bilgilerini içerir

2. **Harita Görüntüleme**
```javascript
<MapView
    initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }}
>
```
- Kullanıcının konumunu merkez alarak haritayı gösterir
- `latitudeDelta` ve `longitudeDelta` zoom seviyesini belirler

## Bildirim Bileşeni (NotificationExample.js)

### Kullanılan Kütüphaneler
```javascript
import * as Notifications from 'expo-notifications';
```

### Kod Açıklamaları

1. **Bildirim Konfigürasyonu**
```javascript
configureNotifications();
requestPermissions();
```
- Bildirim ayarlarını yapılandırır
- Kullanıcıdan bildirim izni ister

2. **Bildirim Gönderme**
```javascript
sendImmediateNotification(
    'Anlık Bildirim',
    'Bu bir anlık bildirim örneğidir!'
);
```
- Anlık bildirim gönderir
- Başlık ve mesaj içeriği alır

## Sensör Bileşeni (Sensors.js)

### Kullanılan Kütüphaneler
```javascript
import { Accelerometer, Gyroscope } from 'expo-sensors';
```

### Kod Açıklamaları

1. **Sensör Verilerini Alma**
```javascript
Accelerometer.setUpdateInterval(1000);
const accelerometerSubscription = Accelerometer.addListener(data => {
    setAccelerometerData(data);
});
```
- İvmeölçer verilerini her saniye günceller
- X, Y, Z eksenlerindeki hareket verilerini alır

```javascript
Gyroscope.setUpdateInterval(1000);
const gyroscopeSubscription = Gyroscope.addListener(data => {
    setGyroscopeData(data);
});
```
- Jiroskop verilerini her saniye günceller
- Cihazın dönüş hareketlerini algılar

## Uygulama Navigasyonu (App.js)

### Kullanılan Kütüphaneler
```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
```

### Kod Açıklamaları

```javascript
<Tab.Navigator>
    <Tab.Screen name="Harita" component={MapPage} />
    <Tab.Screen name="Rehber" component={ContactsPage} />
    <Tab.Screen name="Bildirimler" component={NotificationsPage} />
    <Tab.Screen name="Sensörler" component={SensorsPage} />
</Tab.Navigator>
```
- Alt navigasyon menüsünü oluşturur
- Dört ana sayfaya erişim sağlar:
  - Harita: Konum gösterimi
  - Rehber: Kişiler listesi
  - Bildirimler: Bildirim yönetimi
  - Sensörler: Sensör verileri

## Yardımcı Fonksiyonlar(Bildirim için kullandım) (Utils)

### Bildirim Yardımcıları (notification.js)

```javascript
import * as Notifications from 'expo-notifications';
```

1. **Bildirim İzinleri**
```javascript
export async function requestPermissions() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status;
}
```
- Kullanıcıdan bildirim izni ister
- İzin durumunu döndürür

2. **Anlık Bildirim Gönderme**
```javascript
export async function sendImmediateNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
    },
    trigger: null,
  });
}
```
- Hemen gösterilecek bildirim oluşturur
- Başlık ve mesaj içeriği alır

3. **Bildirim Ayarları**
```javascript
export function configureNotifications() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });
}

## Başlangıç

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm start
```

3. Cihazda veya emülatörde çalıştırın:
```bash
npm run android
# veya
npm run ios
```



1. **Rehber İzinleri**
   - İlk kullanımda rehber izni istenecektir
   - İzin reddedilirse rehber özellikleri çalışmayacaktır

2. **Konum İzinleri**
   - Harita özelliği için konum izni gereklidir
   - Arka planda konum izni istenmemektedir

3. **Bildirimler**
   - Bildirimler için izin gereklidir
   - Test için "Bildirim Gönder" butonunu kullanabilirsiniz
