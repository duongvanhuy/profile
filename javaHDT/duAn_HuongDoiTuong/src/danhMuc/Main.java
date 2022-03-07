package danhMuc;
import java.util.*;
public class Main {
	static Scanner sc = new Scanner(System.in);
	public static void main(String[] args) {
		DichVuKH kh = new DichVuKH();
		DichVuNH nh = new DichVuNH();
		int d=0;
		while (true){
		System.out.println("Đăng nhập vào hệ thống");
		System.out.print("USER NAME:");
		String name =sc.nextLine();
		System.out.print("PASS:");
		int pass=Integer.parseInt(sc.nextLine());
		if ((name.equals("DuongVanHuy"))&&(pass==11111111))  {
			break;
		}
		else {
			System.err.println("Mời bạn nhập lại"); d++;
		}	
			if (d==3) ;
		}
		if(d<3);;
		int traloi;
		do {
			System.out.println("                          |----------Mời bạn chọn dịch vụ---------|");
			System.out.println("                          |                                       |");
			System.out.println("                          |1. Dịch vụ khách hàng.                 |");
			System.out.println("                          |2. Dịch vụ ngân hàng.                  |");
			System.out.print("                          |0. Đóng hệ thống.                      |");
			System.out.println("\n                          |_______________________________________|");
			traloi=sc.nextInt();
			switch(traloi) {
			case 1:
				kh.MenuKH();
				break;
			case 2:
				nh.MenuNH();
				break;
			case 0:
				System.out.println("Đã thoát khỏi hệ thống");
				break;
			default:
				System.err.println("Không hợp lệ. Xin mời bạn nhập lại!!");
			}
		}while(traloi !=0);
		System.out.println("Xin cảm ơn !!");
	}
}
