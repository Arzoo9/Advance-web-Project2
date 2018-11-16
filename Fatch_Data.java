import java.io.*;
import java.text.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import java.util.*;


public class Fatch_Data extends HttpServlet {
    private static String connectionURL = "jdbc:mysql://opatija:3306/jadrn026?user=jadrn026&password=tornado";               
    private static Connection connection = null;
    private static Statement statement = null;
    private static ResultSet resultSet = null;
    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
        throws IOException, ServletException
    {   
    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    String s = "SELECT sku, vendor.name, category.name, vendorModel, quantity, description, retail, features FROM vendor, category, product WHERE vendor.id=product.venID AND category.id=product.catID;";
    String result = doQuery(s);
    out.print(result);  
    }  
public static String doQuery(String s) {
        String answer = "";     
        try {
        Class.forName("com.mysql.jdbc.Driver").newInstance();
        connection = DriverManager.getConnection(connectionURL);
        statement = connection.createStatement();
        resultSet = statement.executeQuery(s);
                ResultSetMetaData rsmd = resultSet.getMetaData();
                       
        while(resultSet.next()) {
            for(int i=1; i <= rsmd.getColumnCount(); i++)  {                      
                    answer +=  resultSet.getString(i) + "~"; 
                }answer += "^";                                                                                 
            }  
                                 
        }
        catch(Exception e) {
            e.printStackTrace();
            return e.toString();
            }
        //////////////////////////////////////////////////////////////////////////            
        // The finally clause always runs, and closes resources if open.
        // DO NOT OMIT THIS!!!!!!
        finally {
            try {
                if(resultSet != null)
                    resultSet.close();
                if(statement != null)
                    statement.close();
                if(connection != null)                   
                    connection.close();
                }
            catch(SQLException e) {
                answer += e;
                }
        //////////////////////////////////////////////////////////////////////////
        }
        return answer;
    }
}


