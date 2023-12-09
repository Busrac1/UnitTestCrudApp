// test başlama aşamaları
/** 
 *  teste kullanılacak metodları ımport et.
 * teste taabi tutuacalk component import et
 * test yazmaya başlamak için test metodu çağrılır ve name fonk parametleri gir
 * fonk parametresi içinde teste tabi tutualakc componetnt arka plana çekilir- render ile
 * testte kullanılack elemalar test tarafına çekilir.
 * *test ortamında kullanıcı gibiisşemler simüle edilir
 */

import {render,waitFor, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('uygulama doğru şekilde çalışıyor', async()=> {
  // teste tabi component arka planda oluşturulması
    render(<App/>)
    // gereklielemanların test tarafına çekilmesi
    const nameInput=screen.getByLabelText('Kullanıcı İsmi Girin')
    const emailInput=screen.getByLabelText('Kullanıcı Mail Girin')
    const submitButton = screen.getByRole('button');


    // veri giriş simlülasyonu

    // inputa tıklaması
    user.click(nameInput)

    // kullanıcının inputa veri girmesi
    user.keyboard('React')
    user.type(emailInput, 'react@gmail.com')
    user.click(submitButton)


    await screen.findByRole('cell', {name:'React'})
    await screen.findByRole('cell', {name:'react@gmail.com'})
})