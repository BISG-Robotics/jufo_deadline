## JUFO Deadlines

Countdown timers to keep track of a bunch of CV/ML/Robotics conference deadlines.


## Contributing

Contributions are very welcome!

A list of top-tier conferences in CV/ML/Robotics is kept. The levels of conferences are consistent with Finland JUFO level, [https://jfp.csc.fi/jufoportal][2]. 

Please feel free to maintain a separate fork if you don't see your sub-field or conference of interest listed.

To add or update a deadline:
- Fork the repository
- Update `_data/conferences.yml`
- Make sure it has the `title`, `year`, `id`, `link`, `deadline`, `timezone`, `date`, `place`, `sub` attributes
    + See available timezone strings [here](https://momentjs.com/timezone/).
- Optionally add a `note` and `abstract_deadline` in case the conference has a separate mandatory abstract deadline.
- Optionally add `hindex` (refers to h5-index from [here](https://scholar.google.com/citations?view_op=top_venues&vq=eng))
- Example:
    ```yaml
    - title: BestConf
      year: 2026
      id: bestconf26  # title as lower case + last two digits of year
      full_name: Best Conference for Anything  # full conference name
      link: link-to-website.com
      deadline: YYYY-MM-DD HH:MM:SS
      abstract_deadline: YYYY-MM-DD HH:MM:SS
      timezone: Asia/Seoul
      place: Incheon, South Korea
      date: September, 18-22, 2022
      start: YYYY-MM-DD
      end: YYYY-MM-DD
      paperslink: link-to-full-paper-list.com
      pwclink: link-to-papers-with-code.com
      hindex: 100
      jufo: 3
      acceptance_rate: 47.9% in 2022 (1716 out of 3579)
      sub: [CV, L3]
      note: Important Info
    ```
- Send a pull request

## Forks & other useful listings

- [aideadlin.es][3] by @paperwithcode
- [ccf-deadlines][4] by @ccfddl

## License

This project is licensed under [MIT][1].

It uses:

- [IcoMoon Icons](https://icomoon.io/#icons-icomoon): [GPL](http://www.gnu.org/licenses/gpl.html) / [CC BY4.0](http://creativecommons.org/licenses/by/4.0/)

[1]: https://abhshkdz.mit-license.org
[2]: https://jfp.csc.fi/jufoportal
[3]: https://aideadlin.es
[4]: https://ccfddl.com/