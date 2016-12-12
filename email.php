<?php

$json = file_get_contents( 'php://input' );
$_POST = json_decode( $json, true );
$errors = false;

$_POST = array_map( function( $field ) use ( $errors ) {
	$field[ 'value' ] = htmlentities( trim( $field[ 'value' ] ) );
	if ( $field[ 'type' ] == 'email' ) {
		if ( !filter_var( $field[ 'value' ], FILTER_VALIDATE_EMAIL ) ) {
			$field[ 'error' ] = 'Invalid email';
			$errors = true;
		}
	}
	return $field;
}, $_POST );

if ( !$errors ) {
	echo 'email is sent';

	$to = 'caitlyn@caitlyncardoza.com';
	$subject = 'Contact Form: ';
	$head = 'Content-Type: text/html; charset=utf-8' . "\r\n";
	$head .= 'From: caitlyncardoza.com <caitlyncardoza.com>' . "\r\n";


	//ob_start();
	//include( 'email-template.php' );
	//$message = ob_get_clean();
	$message = 'testing';
	mail( $to, $subject, $message, $head );
} else {
	$_POST[ 'errors' ] = true;
	echo json_encode( $_POST );
}

?>