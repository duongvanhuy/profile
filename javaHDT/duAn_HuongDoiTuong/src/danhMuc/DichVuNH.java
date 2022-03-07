package danhMuc;
import java.text.NumberFormat;
import java.util.*;
public class DichVuNH extends KhachHang{
	KhachHang kh = new KhachHang();
	private List<DichVuNH> dskhachhang;
	private NganHangDao nganhangDao;
	//
	 String soTK; Double money; String email;
	private String CMND;
	private double tongthu=0;
	private double tongchi=0;
	private double vayTK=0;
	private double khoanvay= 0;
	private int kihan =0;
	private Scanner sc= new Scanner(System.in);
	public DichVuNH() {
		nganhangDao = new NganHangDao();
		dskhachhang= nganhangDao.read();
	}
	public DichVuNH(String name, String address, String soTK, double money, String email, String CMND) {
		super(name, address, soTK, email, money);
		this.CMND = CMND;
	}
	public String getCMND() {
		return CMND;
	}
	public void setCMND(String CMND) {
		this.CMND = CMND;
	}
	public void kiemtra() {
		
	}
	public void nhapTT() {
		System.out.println("Nhap so luong khach hang vao danh sach");
		int n =sc.nextInt();
		for(int i =0; i < n; i++) {
			String name; String address;
			System.out.println("Nhập tên khách hàng");
		    name=sc.nextLine();	
			System.out.println("Nhập địa chỉ thường trú");
		    address=sc.nextLine();
			System.out.println("Nhập STK: ");
			while(!soTK(sc.nextLine()));
			System.out.println("Nhập địa chỉ Email:");
			while(!email(sc.nextLine()));
			System.out.println("Nhập vào số tiền: ");
			while(!money(Double.parseDouble(sc.nextLine())));
			System.out.println("Nhập CMND/thẻ căn cước CD:");
			CMND=sc.next();
			KhachHang dskhachhang = new KhachHang(name, address, soTK, email, money);
		}
	}
	public String toString() {
        NumberFormat currencyEN = NumberFormat.getCurrencyInstance();
        String str1 = currencyEN.format(money);
        return  name + "-" + address + "-" + soTK + "-" + email + "-" + str1;
    }
	public double NapTien() {
		double nap;
		int dem =0;
		while(true) {
			System.out.println("Kiem tra thong tin khach hang sd dv");
			System.out.println("so TK: ");
			String searchSoTK = sc.next();
			System.out.println("CMND: ");
			String searchCMND = sc.next();
			for(int i =0; i< dskhachhang.size(); i++) {
				if(dskhachhang.get(i).getSoTK().equalsIgnoreCase(searchSoTK)
						|| dskhachhang.get(i).getCMND().equalsIgnoreCase(searchCMND)) {
					break;
				}
				else {
					System.out.println("Khong co thong tin trong he thong");
					dem ++;
				}
				// neu dem bawng 3 thif k lamf gif car
				if(dem == 3);
			}
			
		}
	}
	public double RutTien() {
		int phi=2;
		double rut;
		System.out.println("Nhập số tiền cần rút");
		rut=sc.nextDouble();
		if (rut <= (money - phi)) {
            money = money - (rut + phi);
           NumberFormat currencyEN = NumberFormat.getCurrencyInstance();
           String str1 = currencyEN.format(rut);
            System.out.println("Bạn vừa rút " + str1 + " từ tài khoản. Phí là "+phi+"$.");
        } else {
            System.out.println("Số tiền muốn rút không hợp lệ!");
            RutTien();
        }
		return rut;
	}
	public void guiTK() {
		int traloi;
		double tienlai;
		double laisuat =1;
		double tiengui;
		double tongthu=0;
		System.out.println("Nhập thông tin khách hàng gửi tiết kiệm");
		nhapTT();
		do {
			System.out.println("Mời bạn chọn hình thức gửi tiết kiệm");
			System.out.println("1. Gửi tiết kiệm có kì hạn");
			System.out.println("2. Gửi tiết kiệm không kì hạn");
			System.out.println("0. Quay lại");
			traloi=sc.nextInt();
			switch(traloi){
			case 1:
				System.out.println("Bạn chọn hình thức gửi tiết kiệm có kì hạn");
				System.out.println("Nhập vào số tiền gửi của khách hàng");
				tiengui=sc.nextDouble();
				tongthu= tongthu+tiengui;
				System.out.println("Nhập kì hạn gửi tiết kiệm(tháng)");
				kihan=sc.nextInt();
				if(kihan >=6 && kihan<= 12) {
					laisuat = 0.042;
				}
				if(kihan > 12) {
					laisuat= 0.052;
				}
				tienlai=tiengui*laisuat*kihan/12;
				System.out.printf("Số tiền lãi: %10.3f",tienlai);
				System.out.println("\nTổng số tiền nhận được: "+(tienlai+tiengui));
				break;
			case 2:
				System.out.println("Bạn chọn hình thức gửi tiết kiệm không kì hạn");
				System.out.println("Nhập số tiền gửi của khách hàng");
				tiengui=sc.nextDouble();
				tongthu= tongthu+tiengui;
				System.out.println("lãi suất gửi tiết kiệm là 1.5%");
				//Số tiền lãi = Số tiền gửi x lãi suất (%/năm) x số ngày thực gửi/360;
				tienlai=tiengui*0.015*(1/30);
				System.out.println("Tổng số tiền nhận được: "+(tienlai+tiengui));
				break;
			default:
				System.out.println("Mời bạn nhập lại");
			}
		}while(traloi !=0);
	}
	public void vay() {
		double laivay=0;
		int b;
		do {
			System.out.println("Chọn hình thức trả lãi/tiền vay:");
			System.out.println("1. Thời hạn cố định/trả lãi hàng tháng");
			System.out.println("2. Thời hạn cố định/trả lãi + tiền gốc hàng tháng");
			System.out.println("0. Quay lại!");
			b =sc.nextInt();
			switch(b) {
			case 1:
				laivay=(khoanvay*0.18*kihan)/12;
				System.out.printf("Số tiền trả lãi hàng tháng: %10.3f",laivay);
				System.out.println();
				break;
			case 2:
				// lãi vay được tính gộp lãi vay + tiền gốc trả hàng tháng
				laivay=((khoanvay*Math.pow(1+0.18, kihan)*0.18)/ kihan);
				System.out.printf("Số tiền trả lãi + gốc hàng tháng: %10.3f",laivay);
				System.out.println();
				break;
			case 0:
				break;
				default:
					System.err.println("Bạn nhập lai!");
			}
		}while(b !=0);
	}
	public void vayTK() {
		double taisan=0;
		int flag;
		System.out.println("Nhập thông tin khách hàng vay");
		nhapTT();
		do {
			System.out.println("Chọn hình thức vay!!");
			System.out.println("1. Vay tín chấp.");
			System.out.println("2. Vay thế chấp.");
			System.out.println("3. Tổng tiền xuất ra trong ngày");
			//System.out.println("4. Trả khoản vay");
			System.out.println("0. Thoát ");
			flag = sc.nextInt();
			switch(flag) {
			case 1:
				System.out.println("Kì hạn lãi vay của khách hàng:");
				kihan=sc.nextInt();
				System.out.println("Nhập thu nhập hàng tháng của bạn(tháng):");
				double thunhap=sc.nextDouble();
				// biên an toàn cho khoản vay là 50% khoản thu nhập của khách hàng
				khoanvay=thunhap*0.5;
				System.out.println("Bạn đủ điều kiện để vay với khoản vay " + khoanvay);
				vay();
				vayTK = vayTK +khoanvay;
				break;
			case 2:
				System.out.println("Kì hạn lãi vay của khách hàng: ");
				kihan=sc.nextInt();
				System.out.println("Giá trị tài sản thế chấp");
				taisan=sc.nextDouble();
				khoanvay=0.7*taisan;
				System.out.println("Bạn đủ điều kiện để vay với khoản vay "+khoanvay);
				vay();
				vayTK = vayTK +khoanvay;
				break;
				default:
					System.err.println("Xin mời bạn nhập lai");
			}	
		}while(flag !=0);	
	}
	public void thongKe() {
		System.out.println("Tổng số tiền thu kho trong ngày:" + tongthu);
		System.out.println("Tổng số tiền chi ra trong ngày:"+tongchi);
	}
	public void MenuNH() {
		int chon;
		do {
			System.out.println("|------------------------------------Mời chọn chức năng------------------------------------|");
			System.out.println("|                                                                                          |");
			System.out.println("|1. Dịch vụ nạp tiền offline cho khách hàng.                                               |");
			System.out.println("|2. Dịch vị rút tiền offline cho khách hàng.                                               |");
			System.out.println("|3. Lãi suất gửi/tiền gửi tiết kiệm.                                                       |");
			System.out.println("|4. Lãi suất vay/tiền vay.                                                                 |");
			System.out.println("|5. Thống kê.                                                                              |");
			System.out.println("|0. Quay lại.                                                                              |");
			System.out.println("|__________________________________________________________________________________________|");
			chon=sc.nextInt();
			switch(chon) {
			case 1:
				NapTien();
				break;
			case 2:
				RutTien();
				break;
			case 3:
				guiTK();
				break;
			case 4:
				vayTK();
				break;
			case 5:
				thongKe();
				break;
			case 0:
				break;
			default:
				System.out.println("Bạn hãy nhập lại");
			}
		}while(chon!=0);
		
	}
	
	public boolean soTK(String check) {
		if(check != null && check.length()==8) {
			soTK = check;
			return true;
		}
		else {
		System.out.println("Nhập lại số tài khoản");
			return false;
		}
	}
	public boolean email(String check) {
		if(check != null && check.contains("@") && !check.contains(" ")) {
			email=check;
			return true;
		}
		else {
			System.out.println("Nhập lại email");
			return false;
		}
	}
	public boolean money(double check) {
		if(check > 0) {
			money=check;
			return true;	
		}
		else {
			System.out.println("Nhập lại số tiền");
			return false;
		}
	}
}
