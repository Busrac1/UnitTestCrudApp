import { render, within, screen } from "@testing-library/react";
import UserList from "./UserList";

// test ede
const users = [
  {name: "mehmet",email: "mehmet@gmail.com",},
  {name: "büşra", email: "bus@gmail.com" },
  {name: "can",email: "can12@gmail.com",},
  {name: "ayse", email: "ayse23@gmail.com" }
];

test("Her kullanıcı için ekrana bir tablo basılıp basılmadığını kontrol ", () => {
  // test edilecek arka planda basar
  // kullanıcılar props alıyor </ users={users} > gibi
//  fake prop ekle 
  render(<UserList users={users} />);

//   tablodaki satırları çekme
//  iç içe geçmiş elemanlar için within kullan
const rows= within(screen.getByTestId('users')).getAllByRole('row')
// user kaç tane eleman varsa o kadar ekrana basmasını bekleriz
expect(rows).toHaveLength(users.length)
});



test('Her bir kullanıcı için isim ve email değeri gözükür.', ()=> {

    render(<UserList  users={users}/>)
    for(const user of users){
        // kullanıcını adını içerine tablo hicreler

        const nameCell= screen.getByText(user.name)
        expect(nameCell).toBeInTheDocument()

        const emailCell= screen.getByText(user.email)
        expect(emailCell).toBeInTheDocument()
    }
})
