# Will You Date Me - MongoDB Integration

Ứng dụng mời hẹn hò với tính năng lưu trữ dữ liệu vào MongoDB Atlas khi người dùng click vào các nút.

## Tính năng

- Giao diện mời hẹn hò đẹp mắt với hiệu ứng
- Tất cả phản hồi của người dùng được lưu vào cơ sở dữ liệu MongoDB Atlas
- Dữ liệu được lưu khi người dùng nhấp vào các nút:
  - Phản hồi Yes/No
  - Lựa chọn địa điểm
  - Lựa chọn ngày giờ
  - Lựa chọn thức ăn/đồ uống

## Hướng dẫn cài đặt

1. Cài đặt các gói phụ thuộc:
```
npm install
```

2. Ứng dụng đã được cấu hình để kết nối với MongoDB Atlas.

3. Khởi động server:
```
npm start
```

4. Mở trình duyệt và truy cập `http://localhost:3000`

## Triển khai (Deployment) lên Vercel

1. Đảm bảo bạn đã cài đặt Vercel CLI:
```
npm install -g vercel
```

2. Đăng nhập vào Vercel:
```
vercel login
```

3. Triển khai ứng dụng:
```
vercel
```

4. Hoặc triển khai trực tiếp lên production:
```
vercel --prod
```

5. Bạn cũng có thể triển khai bằng cách kết nối tài khoản GitHub của bạn với Vercel và đẩy code của mình lên GitHub.

## Cấu hình MongoDB Atlas

Ứng dụng kết nối đến MongoDB Atlas sử dụng URI được cấu hình trong file `server.js`. URI kết nối hiện tại là:

```
mongodb+srv://trucltde170267:truc123@cluster0.cm1mh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

## Cấu trúc dữ liệu

Dữ liệu được lưu vào cơ sở dữ liệu MongoDB với cấu trúc:

```javascript
{
  responseType: String, // 'yes_button', 'location_selection', v.v.
  value: Mixed,         // Các kiểu dữ liệu khác nhau tùy thuộc vào lựa chọn
  timestamp: Date       // Thời điểm phản hồi được ghi lại
}
``` 