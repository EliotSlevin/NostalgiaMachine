import billboard
import json


def billboard_scrape_hot_100():
    START_YR = 2016
    END_YR = 2025

    for yr in range(START_YR, END_YR+1):
        try:
            print(f'downloading year end hot 100 songs for year {yr}...')
            chart = billboard.ChartData('hot-100-songs', year=yr)
            songs = list(map(lambda ce: [ce.artist, ce.title], chart.entries))
            print(f'saving to file data/{yr}.json...')
            with open(f'data/{yr}.json', 'w') as f:
                json.dump(songs, f)
        except (billboard.BillboardNotFoundException, billboard.BillboardParseException) as e:
            print(e)
            exit()
    print('done.')

def main():
    billboard_scrape_hot_100()


if __name__ == '__main__':
    main()