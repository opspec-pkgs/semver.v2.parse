[![build](https://github.com/opspec-pkgs/semver.v2.parse/actions/workflows/build.yml/badge.svg)](https://github.com/opspec-pkgs/semver.v2.parse/actions/workflows/build.yml)


# Problem statement

parses a [v2 semantic version](https://semver.org/spec/v2.0.0.html)

# Example usage

## Visualize

```shell
opctl ui github.com/opspec-pkgs/semver.v2.parse#1.0.0
```

## Run

```
opctl run github.com/opspec-pkgs/semver.v2.parse#1.0.0
```

## Compose

```yaml
op:
  ref: github.com/opspec-pkgs/semver.v2.parse#1.0.0
  inputs:
    semVer:  # 👈 required; provide a value
  outputs:
    semVer:
```

# Support

join us on
[![Slack](https://img.shields.io/badge/slack-opctl-E01563.svg)](https://join.slack.com/t/opctl/shared_invite/zt-51zodvjn-Ul_UXfkhqYLWZPQTvNPp5w)
or
[open an issue](https://github.com/opspec-pkgs/semver.v2.parse/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see
[project/CONTRIBUTING.md](https://github.com/opspec-pkgs/project/blob/main/CONTRIBUTING.md)
