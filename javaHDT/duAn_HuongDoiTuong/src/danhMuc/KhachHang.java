package danhMuc;
import java.io.Serializable;
public class KhachHang  implements Serializable{
	public String name;
	public String address;
	public String soTK;
	public String email;
	public double money;
	public KhachHang() {
	}
	public KhachHang(String name, String address, String soTK, String email, double money) {
		this.name = name;
		this.address = address;
		this.soTK=soTK;
		this.email=email;
		this.money=money;
	}
	public String getSoTK() {
		return soTK;
	}
	public void setSoTK(String soTK) {
		this.soTK = soTK;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getMoney() {
		return money;
	}
	public void setMoney(double money) {
		this.money = money;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
}
