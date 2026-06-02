---
title: "Why pasting your work into Claude is mostly just saving it to Drive"
enableToc: true
draft: true
---

> [!info] The risk lives in the contract, not the model.
> When you paste a chapter into an AI tool, the worry feels like it is about the model learning your work. It isn't. The exposure sits exactly where it sits for Google Drive: in who holds the data and on what terms. And on the terms most research runs under, the model is the most forgetful party in the whole exchange.

I used to pause before pasting a draft chapter into an AI model, then save the same file to Google Drive a minute later without a flicker. Plenty of careful researchers do the same. They will park interview transcripts, half-finished analyses, and unpublished arguments in the cloud as a matter of routine, then baulk at the thought of talking any of it through with Claude or ChatGPT.

The file is identical. The hesitation is real, and it deserves better than reassurance, because underneath it is a legitimate question about where your data goes and what becomes of it. But the question has fixed on the wrong feature. Once you look at what actually happens, in both cases, the gap between them mostly closes. Here is where the risk really lives, and why the part that worries people is the part that keeps the least.

## The storage question is one you have already answered

Start with the part that feels most different and turns out to be most familiar.

Upload a document to an AI provider and the file is stored on that company's servers: written to a disk in a data centre, encrypted at rest, kept for some period its terms define, and governed by a contract you accepted at sign-up. That is, line for line, what happens when you save the same file to Drive. Your data has left your machine and become a guest on someone else's infrastructure, covered by their security and their promises rather than yours.

A file on Anthropic's servers and a file on Google's servers are the same kind of object in the same kind of place. The bytes do not know which logo is on the building. If you are willing to trust your transcripts to Google's disks under Google's terms, you have already accepted what the storage layer of an AI service asks of you.

What varies between providers, and between tiers within one provider, is the contract: how long data is kept, who can reach it, where it is processed, and what it is used for beyond answering you. Those differences are real, and one of them matters a great deal. But they live in the terms, not in the physics of storage.

## The model reads in order to forget

Here the intuition goes wrong, because the word *reads* smuggles in a whole picture. We imagine the model taking the document in and keeping it, the way a person who reads your diary now knows what was in it.

That is not what happens. When the model processes your document, the text is split into tokens, small chunks of characters, and each token becomes a list of numbers. Those numbers pass through the network layer by layer, and the network produces its answer one token at a time. The whole way through, it is doing arithmetic on a stream of numbers. Nothing about it leaves a trace.

The load-bearing fact is that the model's parameters, the billions of numbers that hold what it has learned, do not change while it answers you. They are frozen. Your document sits in the model's working context for the length of the computation, the way a calculator holds the figures you are currently adding, and when the answer is done the model keeps none of it. The model you talk to tomorrow is, number for number, the model you talked to today. Your document did not enter it and left no mark.

So where does persistence come from? From the service around the model, which may log your conversation so you can see your history, so the provider can debug, so abuse can be caught. But look at what that is: storage, on a server, under terms. It is the Drive question again, not a new one. The model and the storage are two different things, and only one of them is unfamiliar. The unfamiliar one is the one that keeps nothing.

## The one pathway that has no Drive equivalent

There is exactly one way your document can do something a file in Drive cannot, and naming it precisely matters, because this is the real root of the worry. If a provider both retains your input and feeds it into a future training run, your document becomes one of the countless sources the next model learns from. This is what people mean when they say they do not want the AI to "learn from" their work.

Two things shrink this far below its felt size.

First, the pathway is usually closed, and you can check. Whether your data trains a model depends on the tier and the terms. Across Anthropic's commercial products, the [API, Claude for Work, Enterprise, Education and Gov tiers](https://privacy.claude.com/en/articles/7996885-how-do-you-use-personal-data-in-model-training), inputs are not used for training. The consumer tiers, Free, Pro and Max, are the exception: since late September 2025 they [use conversations for training when you allow it](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training), and the setting defaults on, so it is worth finding and switching off if you would rather. This is a contractual choice you can inspect and control, exactly as you would check whether a cloud provider mines your files. For research on an institutional or API arrangement, the pathway is simply shut.

Second, and more interesting, the worry barely survives even when training is on. Suppose your document does go into a training run. How much does it shape the result? Almost nothing. A modern model trains on trillions of tokens; your chapter is a few thousand. Training nudges the parameters by tiny amounts across vast volumes of text, and the influence of any one ordinary document on the final weights is one voice in a choir of millions. The model is not filing your chapter away for retrieval. In its own account of training, Anthropic notes that models [do not store text like a database](https://privacy.claude.com/en/articles/7996885-how-do-you-use-personal-data-in-model-training) and cannot reach back into their training data; they learn patterns, not passages.

The fear underneath all this is memorisation: that the model will recite your sensitive text to a stranger. It can happen, but the research on *when* is reassuring rather than alarming. Studying memorisation across language models, [Carlini and colleagues](https://arxiv.org/abs/2202.07646) found that the text a model is liable to reproduce verbatim is overwhelmingly text duplicated many times across its training data, and [stripping out duplicates](https://dl.acm.org/doi/10.1609/aaai.v38i17.29948) cuts the effect sharply. A document uploaded once sits at the far opposite end from the heavily repeated text that gets memorised. The mechanism that powers the nightmare is duplication, and a single research file does not supply it.

## What is actually worth checking

Put the three pieces together and the question changes shape. The thing carrying the risk was never the word *AI*. It was the data-handling: how long your input is kept, where it is processed, who can reach it, and whether it trains a future model. Those are precisely the questions you trust Drive to answer well every time you save a file there. You have just been answering them by habit rather than by inspection.

An AI service asks the same questions, plus one, training, that has no real cloud-storage twin. And that extra one is the most checkable of the lot, because the tier and the terms decide it. On the arrangements most research belongs on, an institutional licence, an enterprise agreement, the API, it is closed by default. On a consumer account it is a toggle.

None of this means anything goes, and none of it is legal advice. Terms shift, tiers differ, and genuinely sensitive or regulated data still calls for the arrangement your institution has actually sanctioned. The point is narrower and worth holding onto. The researcher pasting pseudonymised transcripts into a consumer chatbot with training on and no institutional cover is taking a risk worth a pause. The researcher on an enterprise or institutional licence that does not train on inputs is, at the level of what happens to the data, almost exactly where they already are every time they open Drive.

So before you next hesitate, do the thing the discomfort is actually asking for, and check the contract rather than the presence of a model. The unease is pointing at something real, the custody of your data, but it has pinned it to the wrong feature. Inspect the terms, and the model turns out to be the least acquisitive party in the room. It reads your document in order to forget it.


---

LinkedIn post

Most careful researchers will save interview transcripts to Google Drive without a second thought, then hesitate to paste the same file into Claude or ChatGPT. I did it myself for a while. The file is identical, so what is the hesitation actually about?

I've been working through this as part of the book on AI and doctoral research that I'm writing with Benita Olivier, and it changed my mind. The discomfort is pointing at something real, the custody of your data, but it has pinned it to the wrong feature.

When you share a document with an AI provider, the file sits on their servers under their terms, exactly as it does on Drive. Same kind of object, same kind of place. And the model itself keeps nothing: it processes your text as a stream of numbers, its parameters frozen, retaining none of it once the answer is done. The one genuinely different pathway, whether your input trains a future model, turns out to be the most checkable of all, because your tier and the terms decide it. On the institutional and enterprise arrangements most research belongs on, it is closed by default.

So the question was never "AI or not". It is the same question you already trust Drive to answer: how long is the data kept, where, who can reach it, and does it train anything? Check the contract rather than the presence of a model, and the model turns out to be the least acquisitive party in the room. It reads your document in order to forget it.

Full post linked below.