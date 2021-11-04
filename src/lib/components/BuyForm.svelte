<script lang="ts">
	const nameExamples: string[] = [
		'Сергей Иванов',
		'Алибек Амантай',
		'Леонид Ли',
		'Александра Иванова',
		'Маншук Керей'
	];

	const namePlaceholder: string = nameExamples[Math.floor(Math.random() * nameExamples.length)];
	const buyUrl = 'https://ticketon.kz';

	let showForm = true;
	let sending = false;
	let timeLeftToRedirect = 5;

	async function handleSubmit(e: SubmitEvent): Promise<void> {
		sending = true;

		const res: Response = await fetch('/buy', { method: 'POST' });
		const answer = await res.json();

		if (res.ok && answer.success) {
			showForm = false;

			redirectTimer();
		}
	}

	function redirectTimer(): void {
		const timer = setInterval(() => {
			timeLeftToRedirect -= 1;

			if (timeLeftToRedirect <= 0) {
				window.open(buyUrl, '_blank');
				clearInterval(timer);
			}
		}, 1000);
	}
</script>

<section class="hero is-bold is-info">
	<div class="hero-body">
		<div class="container has-text-left">
			<div class="columns">
				<div class="column is-4 is-offset-4">
					<h2 class="title is-2 has-text-centered">
						Купить&nbsp;билет на&nbsp;&laquo;Сеанс&raquo;
					</h2>

					{#if !showForm}
						<article class="message is-success">
							<div class="message-body">
								{#if timeLeftToRedirect > 0}
									Вы будете переведены на страницу покупки через {timeLeftToRedirect}.
								{:else}
									Если перенаправления не произошло, пройдите по <a href={buyUrl} target="_blank"
										>этой ссылке</a
									>.
								{/if}
							</div>
						</article>
					{/if}

					{#if showForm}
						<form on:submit|preventDefault={handleSubmit} method="POST" action="/buy">
							<div class="field">
								<label class="label" for="name">Имя</label>
								<div class="control has-icons-left">
									<input
										class="input"
										id="name"
										name="name"
										type="text"
										placeholder={namePlaceholder}
										disabled={sending}
										required
									/>
									<span class="icon is-small is-left">
										<ion-icon name="person" />
									</span>
								</div>
								<p class="help">Обязательное поле</p>
							</div>
							<div class="field">
								<label class="label" for="phone">Телефон</label>
								<div class="control has-icons-left">
									<input
										class="input"
										id="phone"
										name="phone"
										type="phone"
										placeholder="+7 (111) 222-33-44"
										disabled={sending}
										required
									/>
									<span class="icon is-small is-left">
										<ion-icon name="call" />
									</span>
								</div>
								<p class="help">Обязательное поле</p>
							</div>
							<div class="field">
								<label class="label" for="email">Электронная почта</label>
								<div class="control has-icons-left">
									<input
										class="input"
										id="email"
										name="email"
										type="email"
										placeholder="email@example.com"
										disabled={sending}
									/>
									<span class="icon is-small is-left">
										<ion-icon name="mail" />
									</span>
								</div>
							</div>
							<div class="field has-text-centered">
								<div class="control">
									<button class="button is-success" disabled={sending} class:is-loading={sending}
										>Купить билет</button
									>
								</div>
							</div>
						</form>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.label {
		color: inherit;
	}
</style>
