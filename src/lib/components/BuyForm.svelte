<script lang="ts">
	const nameExamples: string[] = [
		'Сергей Иванов',
		'Алибек Амантай',
		'Леонид Ли',
		'Александра Иванова',
		'Маншук Керей'
	];

	const namePlaceholder: string = nameExamples[Math.floor(Math.random() * nameExamples.length)];
 const phonePlaceholder = '+7 (111) 222-33-44';
 const emailPlaceholder = 'email@example.com';
</script>

<section class="hero is-bold is-info">
	<div class="hero-body">
		<div class="container has-text-left">
			<div class="columns">
				<div class="column is-4 is-offset-4">
					<h2 class="title is-2">Купить билет на&nbsp;&laquo;Сеанс&raquo;</h2>

					<form method="POST" action="/">
						<div class="field">
							<label class="label" for="name">Имя</label>
							<div class="control">
								<input class="input" id="name" name="name" type="text" placeholder={namePlaceholder} required />
							</div>
						</div>
						<div class="field">
							<label class="label" for="phone">Телефон</label>
							<div class="control">
								<input class="input" id="phone" name="phone" type="phone" placeholder={phonePlaceholder} required />
							</div>
						</div>
						<div class="field">
							<label class="label" for="email">Электронная почта</label>
							<div class="control">
								<input class="input" id="email" name="email" type="email" placeholder={emailPlaceholder} />
							</div>
						</div>
                        <div class="field">
                            <div class="control">
                                <button class="button is-success">Купить билет</button>
                            </div>
                        </div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
