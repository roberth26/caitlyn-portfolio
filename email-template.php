<html>
	<body>
		<table style="width:100%; border: 2px solid #101720; border-spacing:0; line-height:200%; color: #92c9e8;">
			<thead>
				<tr style="background-color: #101720">
					<th style="padding:10px; text-align:left; font-weight:normal; width:120px">Field</th>
					<th style="padding:10px; text-align:left; font-weight:normal">Data</th> 
				</tr>
			</thead>
			<tbody>
				<tr style="background-color: #2A2D31">
					<td style="padding:10px">Name</td>
					<td style="padding:10px"><?= $_POST[ 'name' ] ?></td> 
				</tr>
				<tr style="background-color: #2e3237">
					<td style="padding:10px">Email</td>
					<td style="padding:10px"><?= $_POST[ 'email' ] ?></td> 
				</tr>
				<tr style="background-color: #2A2D31">
					<td style="padding:10px">Subject</td>
					<td style="padding:10px"><?= $_POST[ 'subject' ] ?></td> 
				</tr>
				<tr style="background-color: #2e3237">
					<td style="padding:10px">Message</td>
					<td style="padding:10px"><?= $_POST[ 'message' ] ?></td> 
				</tr>
			</tbody>
		</table>	
	</body>
</html>