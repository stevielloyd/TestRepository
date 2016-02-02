<html>
<body>

  <?php echo $_POST["name"]; ?><br>
  <?php echo $_POST["email"]; ?>




 <table data-role="table" data-mode="columntoggle" class="ui-responsive" id="myTable">
      <thead>
        <tr>
          <th data-priority="6">CustomerID</th>
          <th>CustomerName</th>
          
        </tr>
		 <tbody>
        <tr>
         
          <td><?php echo $_POST["name"]; ?></td>
          <td><?php echo $_POST["email"]; ?></td>
           
        </tr>
            <tbody>
</body>
</html> 