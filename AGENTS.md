<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Consultation form submits client-side (browser fetch) to Web3Forms `api.web3forms.com/submit`. Why: Web3Forms' free plan rejects API calls from datacenter/server IPs (403 "Pro plan is required"), so a server-side proxy can never work on this plan.

