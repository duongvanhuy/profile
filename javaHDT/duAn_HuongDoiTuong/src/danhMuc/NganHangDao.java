package danhMuc;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.util.*;
public class NganHangDao {
	private static final String NGANHANG_FILE_NAME = "dskhachhang.txt";	 
    public void write(List<DichVuNH> list) {
    	  FileOutputStream fos = null;
          ObjectOutputStream oos = null;
          try {
              fos = new FileOutputStream(new File(NGANHANG_FILE_NAME));
              oos = new ObjectOutputStream(fos);
              oos.writeObject(list);
          } catch (FileNotFoundException e) {
              e.printStackTrace();
          } catch (IOException e) {
              e.printStackTrace();
          } finally {
              closeStream(fos);
              closeStream(oos);
          }
      }
    public List<DichVuNH> read() {
        List<DichVuNH> list = new ArrayList<>();
        FileInputStream fis = null;
        ObjectInputStream ois = null;
        try {
            fis = new FileInputStream(new File(NGANHANG_FILE_NAME));
            ois = new ObjectInputStream(fis);
            list = (List<DichVuNH>) ois.readObject();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } finally {
            closeStream(fis);
            closeStream(ois);
        }
        return list;
    }
    private void closeStream(InputStream is) {
        if (is != null) {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
    private void closeStream(OutputStream os) {
        if (os != null) {
            try {
                os.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}




