import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
public class Assign7 extends JApplet implements ActionListener
{
   
 JButton firstClassButton, economyClassButton;
 JTextField displayField;
   
 boolean[] seat;
   
 int i;
   
 public void init()
 {
   
 Container container = getContentPane();
 container.setLayout(new FlowLayout());
   
 firstClassButton = new JButton("First Class");
 firstClassButton.addActionListener(this);
 container.add(firstClassButton);
   
 economyClassButton = new JButton("Economy");
 economyClassButton.addActionListener(this);
 container.add(economyClassButton);
   
 displayField = new JTextField(20);
 displayField.setEditable(false);
 container.add(displayField);
   
 seat = new boolean[11];
   
 }
   
 public void actionPerformed(ActionEvent actionEvent)
 {
   
 if( actionEvent.getSource() == firstClassButton )
 {
 reserve(true);
 displayField.setText("Seat " + i + " has been reserved");
 }
 else if( actionEvent.getSource() == economyClassButton )
 {
 reserve(false);
 displayField.setText("Seat " + i + " has been reserved");
 }
 }
   
 int reserve(boolean firstClass)
 {
 if(firstClass = true)
 {
 for(i = 1; i <= 5; i++)
 {
 seat[i] = true;
 }
 }
 else if(!firstClass)
 {
 for(i = 6; i <= 10; i++)
 {
 seat[i] = true;
 }
 }
 return i;
 }
}