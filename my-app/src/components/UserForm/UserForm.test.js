import UserForm from "./UserForm";
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event'; 
// useform 
// form gönderildiğinde tabloya eleman ekliyormu
// form mantuığı düzgün çalışıyormu
// name ve amail 
// addUser fonk
// addUser fonks doğru parametreye gidiyormu

test('form gönderildiğinde kullanıcı fonksiyonu doğru parametreleri alarak çalışır', async() => {
    // mock adduser fonksiyonunu taklit edecek
    const mock = jest.fn();

    render(<UserForm addUser={mock} />);

    // gerekli elementleri alma
    const nameInput = screen.getByLabelText('Kullanıcı İsmi Girin');
    const emailInput = screen.getByLabelText('Kullanıcı Mail Girin');
    const submitBtn = screen.getByRole('button');

    // input alanlarına değerleri atama
    user.type(nameInput, 'büşra');
    // veri girişi
    user.type(emailInput, 'hgfhgh@gmail.com');
    
    // formu gönderme tıklanma olayı
    user.click(submitBtn);

    // mock fonksiyonunun doğru parametrelerle çağrıldığını kontrol etme
    expect(mock).toBeCalled();
    expect(mock).toBeCalledWith({ name: 'büşra', email: 'hgfhgh@gmail.com' });

    // name ve mail durumların boşluk durumu
    await waitFor(()=> expect(nameInput).toHaveValue(''))
    await waitFor(()=> expect(emailInput).toHaveValue(''))
});