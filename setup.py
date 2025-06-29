from setuptools import setup, find_packages

setup(
    name="burnedagents",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[],
    entry_points={
        'console_scripts': [
            'burnedagents=burnedagents.main:main',
        ],
    },
)
