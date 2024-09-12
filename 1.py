import pandas as pd
import pyodbc

# 数据库连接参数
server_ip = '10.10.2.100'
database = 'UFDATA_100_2018'
username = 'inspire'
password = 'Apass123'

# 创建连接字符串
conn_str = (
    f'DRIVER={{ODBC Driver 17 for SQL Server}};'
    f'SERVER={server_ip};'
    f'DATABASE={database};'
    f'UID={username};'
    f'PWD={password}'
)

try:
    # 使用 with 语句自动管理连接资源
    with pyodbc.connect(conn_str) as conn:
        # 使用 pandas 读取数据
        query = 'SELECT * from GL_AccVouch'  # 替换 your_table_name 为您要读取的表名
        df = pd.read_sql_query(query, conn)

        # 打印数据框的内容
        print(df)

except pyodbc.Error as e:
    print("Database connection error:", e)
except Exception as e:
    print("An error occurred:", e)