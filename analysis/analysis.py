import pandas as pd
import seaborn as sns
import os
from matplotlib import pyplot as plt


def set_plot(df):
    fig, ax = plt.subplots(3, 4, figsize=(15, 10))

    df = df.rename(columns={'本塁打': 'home_run',
                            '順位': 'rank',
                            '四球': 'a_base_on_balls',
                            '犠打': 'sacrifice'})
    # 本塁打の相関
    home_run = df['home_run'].astype(int)
    rank = df['rank'].astype(int)
    sns.boxplot(home_run, ax=ax[0][0])
    sns.distplot(home_run, bins=20, kde=False, ax=ax[1][0])
    sns.regplot(rank, home_run, ax=ax[2][0])

    # 四球
    a_base_on_balls = df['a_base_on_balls'].astype(int)
    sns.boxplot(a_base_on_balls, ax=ax[0][1])
    sns.distplot(a_base_on_balls, bins=20, kde=False, ax=ax[1][1])
    sns.regplot(rank, a_base_on_balls, ax=ax[2][1])

    # OPS
    ops = df['OPS'].str.lstrip('.').astype(int)
    sns.boxplot(ops, ax=ax[0][2])
    sns.distplot(ops, bins=20, kde=False, ax=ax[1][2])
    sns.regplot(rank, ops, ax=ax[2][2])

    # 犠打
    sacrifice = df['sacrifice'].astype(int)
    sns.boxplot(sacrifice, ax=ax[0][3])
    sns.distplot(sacrifice, bins=20, kde=False, ax=ax[1][3])
    sns.regplot(rank, sacrifice, ax=ax[2][3])


if __name__ == '__main__':

    #path = os.getcwd()
    path = os.path.dirname(os.path.abspath(__file__))
    pkl_central_path = path + "\\pkl\\central.pkl"
    pkl_pacific_path = path + "\\pkl\\pacific.pkl"

    # pkl読み込み
    central_df = pd.read_pickle(pkl_central_path)
    pacific_df = pd.read_pickle(pkl_pacific_path)

    # セリーグの分析図を作成する
    set_plot(central_df)
    # plt.show()
    plot_central_path = path + "\\plot\\central_baseball.png"
    plt.savefig(plot_central_path)

    # セリーグの分析図を作成する
    set_plot(pacific_df)
    # plt.show()
    plot_pacific_path = path + "\\plot\\pacific_baseball.png"
    plt.savefig(plot_pacific_path)

# チームごとに切り出す
# giants_df = central_df.loc[central_df['チーム'] == '巨人']
