<?php function Form() { ?>
	<form
		class="form"
		id="contact-form"
		action="email.php"
		method="post">
			<label class="form__input-group">
				<div class="form__input-group__label">Name*</div>
				<input
					class="form__input-group__field"
					name="name"
					type="text"
					placeholder="Carl Fredricksen"
					required
				/>
			</label>
			<label class="form__input-group">
				<div class="form__input-group__label">Email*</div>
				<input
					class="form__input-group__field"
					name="email"
					type="email"
					placeholder="carl@adventure.com"
					required
				/>
			</label>
			<label class="form__input-group">
				<div class="form__input-group__label">Subject</div>
				<input
					class="form__input-group__field"
					name="subject"
					type="text"
					placeholder="Adventure is out there!"
				/>
			</label>
			<label class="form__input-group">
				<div class="form__input-group__label">Message*</div>
				<textarea
					class="form__input-group__textarea"
					name="message"
					placeholder="Let's chat about..."
					required
				></textarea>
			</label>
			<button class="form__btn" type="submit">Submit</button>
	</form>
<?php } ?>