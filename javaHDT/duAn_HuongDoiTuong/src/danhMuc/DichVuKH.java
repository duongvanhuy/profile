package danhMuc;
import java.util.*;
public class DichVuKH extends KhachHang {
	private Scanner sc= new Scanner(System.in);
	private List<KhachHang> list;
	private KhachHangDao khachhangDao;
	String soTK;
	String email;
	Double money;
	public DichVuKH() {
		khachhangDao = new KhachHangDao();
		list = khachhangDao.read();
	}
	public void themKH() {
		System.out.println("Bạn muốn thêm bao nhiêu khách hàng");
		int them =Integer.parseInt(sc.nextLine());
		for(int i=0; i<them; i++) {
			System.out.printf("Nhập thông tin khách hàng %d", i + 1);
			System.out.println("\nNhập tên khách hàng");
			String name=sc.nextLine();
			System.out.println("Nhập địa chie khách hàng");
			String address=sc.nextLine();
			System.out.println("Nhập số tài khoản: ");
			while(!soTK(sc.nextLine()));	
			System.out.println("Nhập emial:");		
			while(!email(sc.nextLine()));
			System.out.println("Nhập số tiền: ");			
			while(!money(Double.parseDouble(sc.nextLine())));
			
			
			KhachHang khachhang = new KhachHang(name, address, soTK, email, money);
			list.add(khachhang);
			khachhangDao.write(list);
		}
	}
	public void timKiem() {
		System.out.println("Nhập số tài khoản khách hàng cần tìm:");
		String searchSTK=sc.nextLine();
		// má»—i láº§n tÃ¬m tháº¥y STK thÃ¬ tÄƒng lÃªn 1 giÃ¡ trá»‹;
		int count=0;
		for(int i =0; i< list.size(); i++) {
			if(list.get(i).getSoTK().equalsIgnoreCase(searchSTK)) {
				System.out.println("|-----------------------------------Thông tin khách hàng-----------------------------------|");
				System.out.print("|                                                                                          |");
				System.out.print("\n|__________________________________________________________________________________________|");
				System.out.printf("\n|%20s|%19s|%15s|%20s|%12s", "TÃªn khÃ¡ch hÃ ng", "Ä�á»‹a chá»‰ thÆ°á»�ng trÃº", 
						"Sá»‘ tÃ i khoáº£n NH", "Email", "Money");
				System.out.print("|                                                                                                                     |");
				System.out.printf("\n|%20s|%19s|%15s|%20s|%12s|", list.get(i).getName(), 
						list.get(i).getAddress(), list.get(i).getSoTK(), list.get(i).getEmail(), 
						list.get(i).getMoney());
				System.out.println("\n|__________________________________________________________________________________________|");
				System.out.println();
				count ++;
			}
		}
		//khachhangDao.write(list);
			// sau khi duyá»‡t xong cÃ¡c pháº§n tá»­ náº¿u count= 0 thÃ¬ khÃ´ng tÃ¬m tháº¥y STK Ä‘Ã³!!
			if(count==0) {
				System.err.println("KhÃ´ng tÃ¬m tháº¥y STK cáº§n tÃ¬m.");
			}
	}
	public void xoaKH() {
		System.out.println("Nháº­p STK cá»§a khÃ¡ch hÃ ng cáº§n xÃ³a:");
		String STK = sc.nextLine();
		int count=0;
		for(int i=0; i< list.size(); i++) {
			if(list.get(i).getSoTK().equalsIgnoreCase(STK)){
				list.remove(i);
				khachhangDao.write(list);
				System.out.println("Báº¡n Ä‘Ã£ xÃ³a khÃ¡ch hÃ ng cÃ³ Sá»‘ Tk: "+STK+" ra khá»�i danh sÃ¡ch");
				count ++;	
			}
		}
		if(count==0) {
			System.err.println("KhÃ´ng tÃ¬m tháº¥y STK cáº§n tÃ¬m.");
		}	
	}
	public void thongKe() {
		int count=0;
		for(int i=0; i< list.size(); i++) {
			if(list.get(i).getMoney()>= 10000) {
				System.out.println("|-----------------------------------ThÃ´ng tin khÃ¡ch hÃ ng-----------------------------------|");
				System.out.print("|                                                                                          |");
				System.out.print("\n|__________________________________________________________________________________________|");
				System.out.printf("\n|%20s|%19s|%15s|%20s|%12s", "TÃªn khÃ¡ch hÃ ng", "Ä�á»‹a chá»‰ thÆ°á»�ng trÃº", 
						"Sá»‘ tÃ i khoáº£n NH", "Email", "Money");
				System.out.print("|                                                                                                                     |");
				System.out.printf("\n|%20s|%19s|%15s|%20s|%12s|", list.get(i).getName(), 
						list.get(i).getAddress(), list.get(i).getSoTK(), list.get(i).getEmail(), 
						list.get(i).getMoney());
				System.out.println("\n|__________________________________________________________________________________________|");
				count ++;
			}
		}
			if(count ==0) {
				System.out.println("KhÃ´ng cÃ³ khÃ¡ch hÃ ng nÃ o tháº£o mÃ£n Ä‘iá»�u kiá»‡n");	
			}
		//khachhangDao.write(list);
	}
	public void sapXep() {
		// phÆ°Æ¡ng thá»©c nÃ y lÃ  phá»©c thá»©c cÃ³ sáºµn trong java
		//vá»›i má»¥c Ä‘ich sáº¯p xáº¿p cÃ¡c pháº§n tá»­ theo mong muá»‘n cá»§a ngÆ°á»›i sd
		// khai bÃ¡o nÃ³ nhÆ° sau: Collections.sort(List, new Comparator<so sÃ¡nh>)
		Collections.sort(list, new Comparator<KhachHang>(){
			@Override
			public int compare(KhachHang o1, KhachHang o2) {
		                return (o1.getName().compareTo(o2.getName()));
			}
//				int cmn =o1.getName().compareTo(o2.getName());
//				if(cmn <0) {
//					// tráº£ vá»� nhá»� hÆ¡n 0, Ä‘áº·t chá»‰ sá»‘ a  nhá»� hÆ¡n chá»‰ sá»‘ b, tá»©c lÃ  a Ä‘á»©ng trÆ°á»›c b.
//					return -1;
//				}
//				if(cmn>0) {
//					// tráº£ vá»� lá»›n hÆ¡n 0, Ä‘áº·t chá»‰ sá»‘ b nhá»� hÆ¡n chá»‰ sá»‘ a, tá»©c lÃ  b  Ä‘á»©ng trÆ°á»›c a.
//					return 1;
//				}
//				else
//					// tráº£ vá»� báº±ng 0, giá»¯ nguyÃªn a, b nhÆ°ng váº«n tiáº¿p tá»¥c so sÃ¡nh cÃ¡c pháº§n tá»­ cá»§a máº¡ng
//					return 0;
//			}
		});	
		khachhangDao.write(list);
		showTT();	
	}
	public void moneyMax() {
		int indexMax=0;
		for(int i=1; i< list.size(); i++) {
			if(list.get(indexMax).getMoney() < list.get(i).getMoney()) {
				indexMax=i;
			}
		}
		System.out.println("|---------------------------------ThÃ´ng tin khÃ¡ch hÃ ng VIP---------------------------------|");
		System.out.print("|                                                                                          |");
		System.out.print("\n|__________________________________________________________________________________________|");
		System.out.printf("\n|%20s|%19s|%15s|%20s|%12s", "TÃªn khÃ¡ch hÃ ng", "Ä�á»‹a chá»‰ thÆ°á»�ng trÃº", 
				"Sá»‘ tÃ i khoáº£n NH", "Email", "Money");
		System.out.print("|                                                                                                                     |");
		System.out.printf("\n|%20s|%19s|%15s|%20s|%12s|", list.get(indexMax).getName(), 
				list.get(indexMax).getAddress(), list.get(indexMax).getSoTK(), 
				list.get(indexMax).getEmail(), list.get(indexMax).getMoney());
		System.out.println("\n|__________________________________________________________________________________________|");
		System.out.println();
	}
	public void showTT() {
		list = khachhangDao.read();
		System.out.println("|-----------------------------------ThÃ´ng tin khÃ¡ch hÃ ng-----------------------------------|");
		System.out.print("|                                                                                          |");
		System.out.print("\n|__________________________________________________________________________________________|");
		System.out.printf("\n|%20s|%19s|%15s|%20s|%12s", "TÃªn khÃ¡ch hÃ ng", "Ä�á»‹a chá»‰ thÆ°á»�ng trÃº", 
				"Sá»‘ tÃ i khoáº£n NH", "Email", "Money");
		System.out.print("|                                                                                                                     |");
		for(KhachHang tt : list) {
			System.out.printf("\n|%20s|%19s|%15s|%20s|%12s|", tt.getName(), tt.getAddress(), 
					tt.getSoTK(), tt.getEmail(), tt.getMoney());
		}
		System.out.println("\n|__________________________________________________________________________________________|");
	}
	public void MenuKH() {
		int chon; 
		do {
			System.out.println("|------------------------------------Mời bạn chọn dịch vụi------------------------------------|");
			System.out.println("|                                                                                          |");
			System.out.println("|1. Thêm khách hàng mới vào hệ thống Ngân hàng                                           |");
			System.out.println("|2. Tìm kiếm khách hàng theo STK.                                                |");
			System.out.println("|3. Xóa khách hàng khỏi hệ thống ngân hàng.                                               |");
			System.out.println("|4. Thống kê khách hàng có tiền gửi trên $10 000.                                     |");
			System.out.println("|5. Sắp xếp khách hàng theo tên.                                                           |");
			System.out.println("|6. Thông tin khách hàng vip(Số tiền gửi nhiều nhất).                                       |");
			System.out.println("|7. Hiện thông tin khách hàng.                                                         |");
			System.out.println("|0. Quay láº¡i.                                                                              |");
			System.out.println("|__________________________________________________________________________________________|");
			chon=Integer.parseInt(sc.nextLine());
			switch(chon) {
			case 1:
				themKH();
				break;
			case 2:
				timKiem();
				break;
			case 3:
				xoaKH();
				break;
			case 4:
				thongKe();
				break;
			case 5:
				sapXep();
				break;
			case 6:
				moneyMax();
				break;
			case 7:
				showTT();
				break;
			case 0:
				break;
			default:
				System.out.println("Báº¡n hÃ£y nháº­p láº¡i");
			}
		}while(chon !=0);
	
	} 
	public boolean soTK(String check) {
		if(check != null && check.length()==8) {
			soTK = check;
			return true;
		}
		else {
		System.out.println("Nháº­p láº¡i sá»‘ tÃ i khoáº£n");
			return false;
		}
	}
	public boolean email(String check) {
		if(check != null && check.contains("@") && !check.contains(" ")) {
			email=check;
			return true;
		}
		else {
			System.out.println("Nháº­p láº¡i email");
			return false;
		}
	}
	public boolean money(double check) {
		if(check > 0) {
			money=check;
			return true;	
		}
		else {
			System.out.println("Nháº­p láº¡i sá»‘ tiá»�n");
			return false;
		}
	}

}

