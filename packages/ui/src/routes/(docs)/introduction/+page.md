---
title: Introduction
description: A Svelte component library for Immich
---

@immich/ui is a collection of [Svelte](https://svelte.dev/) components that are shared across all Immich projects. It is designed to be a simple and easy-to-use library that provides a consistent look and feel.

## Why build Immich UI?

Immich was built from scratch using just [tailwindcss](https://tailwindcss.com/), and although it certainly had a design philosophy, it was not consistent, standardized, or easy to use, test, or change. That, combined with the need to build additional, related websites that used the same branding (like https://immich.app/, https://buy.immich.app/, https://awesome.immich.app/, etc.) led to the creation of this component library. With the library it is much easier to spin up new sites or projects that use the same branding. The library also has a focus on standardization and reuses several types and strategies, such as `Size`, `Color`, `Variants` and more. Additionally, it standardizes some common usages like [SiteFooter](/components/site-footer). In short, the library provides complete control over the look and feel, while also making it easy to work with, publish, and share.
